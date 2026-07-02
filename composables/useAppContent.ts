import type { AppContent } from "~/sanity/schema/appContent";

export function useAppContent() {
  return useAsyncData<AppContent>("app-content", () => $fetch("/api/app-content"));
}
