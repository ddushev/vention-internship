import apiEndpoints from "@/api.endpoints";

import { Game, Product } from "@/types";
import { del, get, post, update } from "./requests";

interface GetProductsParams {
  urlParams: string;
}

export async function getProducts({ urlParams }: GetProductsParams): Promise<Game[]> {
  const data = await get(`${apiEndpoints.getProducts}?${urlParams}`);
  return data as Game[];
}

export async function addProduct(product: Product) {
  const data = await post(apiEndpoints.product, product);
  return data as Game[];
}

export async function updateProduct(product: Product) {
  const data = await update(apiEndpoints.product, product);
  return data as Game[];
}

export async function deleteProduct(id: number) {
  const data = await del(`${apiEndpoints.product}/${id}`);
  return data as { games: Game[]; removedGame: Game[] };
}
