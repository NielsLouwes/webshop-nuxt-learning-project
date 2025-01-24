import type { Product } from "~/pages/index.vue";

export const useListStore = () => {
  return useState<string[]>("list", () => []);
};

export const addtoList = (product: string) => {
  const listStore = useListStore();

  console.log("listStore", listStore);

  listStore.value.push(product);
};
