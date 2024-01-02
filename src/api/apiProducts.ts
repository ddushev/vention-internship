import apiEndpoints from "@/api.endpoints";

import handleErrors from "@/utils/handleErrors";
import { Game } from "@/components/gameCard/gameCard";
import * as api from "./requests";

interface GetProductsParams {
  urlParams: string;
}

export default async function getProducts({ urlParams }: GetProductsParams): Promise<Game[]> {
  try {
    const data = await api.get(`${apiEndpoints.getProducts}?${urlParams}`);
    return data as Game[];
  } catch (error) {
    handleErrors(error);
    return [];
  }
}
