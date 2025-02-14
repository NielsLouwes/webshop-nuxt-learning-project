import type { Product } from "~/types/global";
import nuxtStorage from "nuxt-storage";

type ObjectStoreType = { [key: string]: Product[] };

export const useListStore = () => {
  const list = useState<string[]>("list", () => {
    // Initialize from localStorage if exists
    const stored = nuxtStorage.localStorage.getData("list");

    return stored || [];
  });
  const objectStore = useState<ObjectStoreType>("objectStore", () => {
    const stored = nuxtStorage.localStorage.getData("objectStore");

    return stored || {};
  });

  watch(
    objectStore,
    (newValue) => {
      nuxtStorage.localStorage.setData("objectStore", newValue);
    },
    { deep: true }
  );

  watch(list, (newValue) => {
    nuxtStorage.localStorage.setData("list", newValue);
  });

  const addToList = (product: Product) => {
    const existingProduct = list.value.find((p) => p === product.title);

    if (!existingProduct) {
      list.value.push(product.title);
    } else {
      console.warn("product already added to list!");
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
      nuxtStorage.localStorage.removeItem();
    }
  };

  const addItemToList = (listName: string, product: Product) => {
    const existingProduct = objectStore.value[listName]?.find(
      (item: Product) => item.description === product.description
    );

    if (!existingProduct) {
      objectStore.value[listName] = objectStore.value[listName] || [];
      objectStore.value[listName].push(product);
      objectStore.value = { ...objectStore.value };
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
