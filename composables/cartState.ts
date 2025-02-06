import type { Product } from "~/pages/index.vue";

export const useCartStore = () => useState<Product[]>("cart", () => []);

export const useCartCount = () => {
  const cartStore = useCartStore();
  return computed(() => cartStore.value.length);
};

export const addToCart = (product: Product) => {
  const cartStore = useCartStore();
  console.log("cartStore", cartStore);

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

  cartStore.value.map((cart) => {
    console.log("cart.price", cart.price);
    total += cart.price;
  });

  return total;
};
