import type { Product } from "~/pages/index.vue";

export const useCartStore = () => useState<Product[]>("cart", () => []);

export const useCartCount = () => {
  const cartStore = useCartStore();
  return computed(() => cartStore.value.length);
};

export const addToCart = (product: Product) => {
  const cartStore = useCartStore();
  cartStore.value.push(product);
};
