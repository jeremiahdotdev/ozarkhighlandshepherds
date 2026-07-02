import { getAppContent } from "../utils/appContent";

export default defineEventHandler(async () => {
  return await getAppContent();
});
