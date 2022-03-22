import Butter from "buttercms";

export let butterCMS = undefined;
try {
  const apiKey = String(import.meta.env.VITE_APP_BUTTER_CMS_API_KEY);
  butterCMS = Butter(apiKey, !import.meta.env.VITE_APP_BUTTER_CMS_PREVIEW);
} catch (error) {
  console.error(error);
}
