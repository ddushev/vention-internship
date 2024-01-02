import apiEndpoints from "@/api.endpoints";

import handleErrors from "@/utils/handleErrors";
import { Game } from "@/components/gameCard/gameCard";
import * as api from "./requests";

interface GetProductsParams {
  category: string;
}

export default async function getProducts({ category }: GetProductsParams): Promise<Game[]> {
  try {
    const data = await api.get(`${apiEndpoints.getProducts}${category}`);
    return data as Game[];
  } catch (error) {
    handleErrors(error);
    return [];
  }
}
