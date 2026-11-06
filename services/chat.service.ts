import { ENV_STORE } from "@/core/config";

const URL = ENV_STORE.urlURL;

export const sentQuestion = {
  async getStudent(): Promise<any> {
    const reponse = await fetch(URL);
    return await reponse.json();
  },
};
