import breed from "~/assets/breed.json";
import en from "~/assets/en.json";
import type { AppContent } from "~/sanity/schema/appContent";

export const fallbackAppContent: AppContent = {
  site: {
    title: en.title,
    menu: en.menu,
    icon: en.icon,
    next: en.next,
    previous: en.previous,
    viewItem: "View item",
    themeToggle: "Toggle color theme",
    moonIconAlt: "Moon Icon",
    sunIconAlt: "Sun Icon",
    defaultImageAlt: "Ozark Highland Shepherds German Shepherd",
    navigation: {
      home: "Home",
      faq: "FAQ",
      litters: "Litters",
      puppies: "Puppies",
      contact: "Contact",
    },
    litter: en.litter,
    copyright: en.copyright,
  },
  home: en.welcome,
  faq: en.faq,
  contact: en.contact,
  breed,
};
