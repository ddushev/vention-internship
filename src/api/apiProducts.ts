import apiEndpoints from "@/api.endpoints";

import handleErrors from "@/utils/handleErrors";
import { Game, Product } from "@/types";
import { get, post } from "./requests";

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

export async function addProduct({ name, category, description, image, minAge, price, pc, ps5, xbox }: Product) {
  const product = { name, category, description, image, minAge, price, pc, ps5, xbox };
  try {
    const game = await post(apiEndpoints.product, product);
    return game;
  } catch (error) {
    handleErrors(error);
    return [];
  }
}
