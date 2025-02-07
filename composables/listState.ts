import type { Product } from "~/types/global";

type ObjectStoreType = { [key: string]: string[] };

export const useListStore = () => {
  const list = useState<string[]>("list", () => []);
  const objectStore = useState<ObjectStoreType>("objectStore", () => ({}));

  // Update addToList to instead add products to the keys in objectStore
  // Can then remove list altogether

  const addToList = (product: Product) => {
    const existingProduct = list.value.find((p) => p === product.title);

    if (!existingProduct) {
      list.value.push(product.title);
    } else {
      console.log("product already added to list!");
    }
  };

  const createList = (name: string) => {
    if (!objectStore.value[name]) {
      objectStore.value[name] = [];
    }
  };

  return {
    list,
    objectStore: objectStore.value,
    addToList,
    createList,
  };
};
