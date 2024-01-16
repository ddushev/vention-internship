import apiEndpoints from "@/api.endpoints";

import handleErrors from "@/utils/handleErrors";
import { Game } from "@/types";
import { get } from "./requests";

interface GetProductsParams {
  urlParams: string;
}

export async function getProducts({ urlParams }: GetProductsParams): Promise<Game[]> {
  try {
    const data = await get(`${apiEndpoints.getProducts}?${urlParams}`);
    return data as Game[];
  } catch (error) {
    handleErrors(error);
    return [];
  }
}

export function addProduct({ name, category }: { name: string; category: string }) {
  console.log(name, category);
}
