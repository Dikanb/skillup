type Product = {
  id: number;
  title: string;
  description: string;
  capacity: number;
  type: string;
  price: number;
  image: string;
};
const productsArray: Product[] = [
  {
    id: 1,
    title: "iPhone 14 Pro",
    description: "This is iPhone 14 Pro",
    capacity: 512,
    type: "phone",
    price: 1500,
    image: "/images/iphone-black.webp",
  },
  {
    id: 2,
    title: "iPhone 13 Pro",
    description: "This is iPhone 13 Pro",
    capacity: 512,
    type: "phone",
    price: 1200,
    image: "/images/iphone-blue.webp",
  },
  {
    id: 3,
    title: "iPhone 12 Pro",
    description: "This is iPhone 12 Pro",
    capacity: 256,
    type: "phone",
    price: 1000,
    image: "/images/iphone-gold.webp",
  },
  {
    id: 4,
    title: "iPhone 11 Pro",
    description: "This is iPhone 11 Pro",
    capacity: 256,
    type: "phone",
    price: 800,
    image: "/images/iphone-purple.webp",
  },
  {
    id: 5,
    title: "iPhone 11 ",
    description: "This is iPhone 11",
    capacity: 128,
    type: "phone",
    price: 600,
    image: "/images/iphone-red.webp",
  },
  {
    id: 6,
    title: "iPhone 10",
    description: "This is iPhone 10",
    capacity: 64,
    type: "phone",
    price: 500,
    image: "/images/iphone-silver.webp",
  },
];

export default productsArray;
