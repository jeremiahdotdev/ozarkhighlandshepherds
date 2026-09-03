import { createClient } from "@sanity/client";

export function isSanityConfigured(config: {
  projectId?: string;
  dataset?: string;
}) {
  return Boolean(config.projectId && config.dataset);
}

export function createAppSanityClient(config: {
  projectId: string;
  dataset: string;
  apiVersion: string;
  token?: string;
  useCdn?: boolean;
}) {
  return createClient({
    projectId: config.projectId,
    dataset: config.dataset,
    apiVersion: config.apiVersion,
    token: config.token || undefined,
    useCdn: config.useCdn ?? true,
  });
}
