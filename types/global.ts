export type Rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: Rating;
  category: string;
  quantity: number;
};
