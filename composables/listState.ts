import type { Product } from "~/types/global";

type ObjectStoreType = { [key: string]: Product[] };

export const useListStore = () => {
  const list = useState<string[]>("list", () => []);
  const objectStore = useState<ObjectStoreType>("objectStore", () => ({}));

  const addToList = (product: Product) => {
    const existingProduct = list.value.find((p) => p === product.title);

    if (!existingProduct) {
      list.value.push(product.title);
    } else {
      console.log("product already added to list!");
    }
  };

  const createList = (name: string) => {
    if (!objectStore.value[name] && name.length > 3) {
      objectStore.value[name] = [];
    }
  };

  const deleteList = (listName: string) => {
    if (objectStore.value[listName]) {
      delete objectStore.value[listName];
      // Trigger reactivity
      objectStore.value = { ...objectStore.value }; // Create a new object reference
    }
  };

  const addItemToList = (listName: string, product: Product) => {
    const existingProduct = objectStore.value[listName]?.find(
      (item: Product) => item.description === product.description
    );

    if (!existingProduct) {
      objectStore.value[listName] = objectStore.value[listName] || [];
      objectStore.value[listName].push(product);
    }
  };

  return {
    list,
    objectStore: objectStore.value,
    addToList,
    createList,
    addItemToList,
    deleteList,
  };
};
