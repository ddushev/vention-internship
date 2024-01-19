import apiEndpoints from "@/api.endpoints";

import handleErrors from "@/utils/handleErrors";
import { Game, Product } from "@/types";
import { del, get, post, update } from "./requests";

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

export async function addProduct(product: Product) {
  try {
    const data = await post(apiEndpoints.product, product);
    return data as Game[];
  } catch (error) {
    handleErrors(error);
    return [];
  }
}

export async function updateProduct(product: Product) {
  try {
    const data = await update(apiEndpoints.product, product);
    return data as Game[];
  } catch (error) {
    handleErrors(error);
    return [];
  }
}

export async function deleteProduct(id: number) {
  try {
    const data = await del(`${apiEndpoints.product}/${id}`);
    return data as { games: Game[]; removedGame: Game[] };
  } catch (error) {
    handleErrors(error);
    return { games: [], removedGame: [] };
  }
}
