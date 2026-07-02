import type { AppContent } from "~/sanity/schema/appContent";
import type { Breed } from "~/sanity/schema/documents/breedContent";
import type { ContactPage } from "~/sanity/schema/documents/contactPage";
import type { FaqPage } from "~/sanity/schema/documents/faqPage";
import type { HomePage } from "~/sanity/schema/documents/homePage";
import type { SiteSettings } from "~/sanity/schema/documents/siteSettings";
import { fallbackAppContent } from "./fallbackContent";
import { createSanityClient, isSanityConfigured } from "./sanity";

interface SanityAppContent {
  site?: Partial<SiteSettings>;
  home?: Partial<HomePage>;
  faq?: Partial<FaqPage>;
  contact?: Partial<ContactPage>;
  breed?: Partial<Breed>;
}

const APP_CONTENT_QUERY = `{
  "site": *[_type == "siteSettings"][0],
  "home": *[_type == "homePage"][0],
  "faq": *[_type == "faqPage"][0],
  "contact": *[_type == "contactPage"][0],
  "breed": *[_type == "breedContent"][0]
}`;

function withFallback<T>(value: Partial<T> | undefined, fallback: T): T {
  if (!value) return fallback;
  return {
    ...fallback,
    ...value,
  };
}

export async function getAppContent(): Promise<AppContent> {
  const config = useRuntimeConfig();
  const sanityConfig = {
    projectId: config.public.sanityProjectId,
    dataset: config.public.sanityDataset,
    apiVersion: config.public.sanityApiVersion,
    useCdn: config.public.sanityUseCdn,
  };

  if (!isSanityConfigured(sanityConfig)) {
    return fallbackAppContent;
  }

  try {
    const client = createSanityClient({
      projectId: sanityConfig.projectId,
      dataset: sanityConfig.dataset,
      apiVersion: sanityConfig.apiVersion,
      useCdn: sanityConfig.useCdn,
    });
    const content = await client.fetch<SanityAppContent>(APP_CONTENT_QUERY);

    return {
      site: {
        ...fallbackAppContent.site,
        ...withFallback(content.site, fallbackAppContent.site),
        navigation: {
          ...fallbackAppContent.site.navigation,
          ...(content.site?.navigation ?? {}),
        },
        litter: {
          ...fallbackAppContent.site.litter,
          ...(content.site?.litter ?? {}),
        },
      },
      home: withFallback(content.home, fallbackAppContent.home),
      faq: withFallback(content.faq, fallbackAppContent.faq),
      contact: withFallback(content.contact, fallbackAppContent.contact),
      breed: withFallback(content.breed, fallbackAppContent.breed),
    };
  } catch (error) {
    console.error("Falling back to local content because Sanity fetch failed.", error);
    return fallbackAppContent;
  }
}
