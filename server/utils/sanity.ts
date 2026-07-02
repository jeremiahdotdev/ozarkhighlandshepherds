import { createClient } from "@sanity/client";

export function isSanityConfigured(config: {
  projectId?: string;
  dataset?: string;
}) {
  return Boolean(config.projectId && config.dataset);
}

export function createSanityClient(config: {
  projectId: string;
  dataset: string;
  apiVersion: string;
  useCdn?: boolean;
}) {
  return createClient({
    projectId: config.projectId,
    dataset: config.dataset,
    apiVersion: config.apiVersion,
    useCdn: config.useCdn ?? true,
  });
}
