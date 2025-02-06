import type { Product } from "~/pages/index.vue";

export const useListStore = () => {
  return useState<string[]>("list", () => []);
};

export const addToList = (product: Product) => {
  const listStore = useListStore();

  listStore.value.push(product.title);
};
