import apiEndpoints from "@/api.endpoints";

import handleErrors from "@/utils/handleErrors";
import { Game } from "@/components/gameCard/gameCard";
import * as api from "./requests";

export default async function getProducts(): Promise<Game[]> {
  try {
    const data = await api.get(apiEndpoints.getProducts);
    return data as Game[];
  } catch (error) {
    handleErrors(error);
    return [];
  }
}
