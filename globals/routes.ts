import type { Route } from "~/types/route";
import type { AppContent } from "~/sanity/schema/appContent";

export const getRoutes = (content: AppContent): Record<string, Route> => {
    return {
        home: { path: '/', label: content.site.navigation.home },
        about: { path: '/faq', label: content.site.navigation.faq },
        litters: { path: '/litters', label: content.site.navigation.litters, disabled: content.breed.litters.length <= 2 },
        puppies: { path: '/puppies', label: content.site.navigation.puppies, disabled: content.breed.litters.length === 0 },
        contact: { path: '/contact', label: content.site.navigation.contact },
    };
}
