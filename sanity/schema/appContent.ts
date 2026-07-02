import type { Breed } from "./documents/breedContent";
import type { ContactPage } from "./documents/contactPage";
import type { FaqPage } from "./documents/faqPage";
import type { HomePage } from "./documents/homePage";
import type { SiteSettings } from "./documents/siteSettings";

export interface AppContent {
  site: SiteSettings;
  home: HomePage;
  faq: FaqPage;
  contact: ContactPage;
  breed: Breed;
}
