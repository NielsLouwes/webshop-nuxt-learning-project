import type { Product } from "~/pages/index.vue";

export const useListStore = () => {
  return useState<string[]>("list", () => []);
};

export const addToList = (product: Product) => {
  const listStore = useListStore();
  console.log("listStore", listStore);

  const existingProduct = listStore.value.find((p) => p === product.title);
  console.log("existingProduct", existingProduct);

  if (!existingProduct) {
    listStore.value.push(product.title);
  } else {
    console.log("product already added to list!");
  }
};
