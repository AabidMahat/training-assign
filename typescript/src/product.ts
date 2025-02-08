const productName: string = "DELL";
const price: number = 30000;
const isAvaliable: boolean = true;

enum Category {
  Electronics,
  Clothing,
  Grocery,
}

interface Product {
  productName: string;
  price: number;
  isAvaliable: boolean;
  category: Category;
}

const products: Product[] = [
  {
    productName: productName,
    price: price,
    isAvaliable: isAvaliable,
    category: Category.Clothing,
  },
];

console.log(products);
