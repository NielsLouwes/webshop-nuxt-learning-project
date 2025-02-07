import type { Product } from "~/types/global";

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
    existingProduct.quantity += 1;
  } else {
    product.quantity = 1;
    cartStore.value.push(product);
  }
};

export const cartTotalCost = () => {
  const cartStore = useCartStore();

  let total = 0;

  cartStore.value.map((cartItem) => {
    console.log("cartItem.price", cartItem.price);
    total += cartItem.price;
  });

  return total;
};
