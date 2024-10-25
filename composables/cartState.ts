import type { Product } from "~/pages/index.vue";

export const useCartStore = () => useState<Product[]>("cart", () => []);

export const useCartCount = () => {
  const cartStore = useCartStore();
  return computed(() => cartStore.value.length);
};

export const addToCart = (product: Product) => {
  const cartStore = useCartStore();

  const existingProduct = cartStore.value.find(
    (p) => p.description === product.description
  );

  if (existingProduct) {
    existingProduct.price += product.price;
  } else {
    cartStore.value.push(product);
  }
};
