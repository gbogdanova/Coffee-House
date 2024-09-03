export interface Product {
    id: string,
    name: string,
    description: string,
    price: string,
    category: string,
    sizes: {
      [key: string]: SizeOption;
    },
    additives: AdditivesOptions[],
    image: string,
  }

interface SizeOption {
    size: string,
    "add-price": string,
}
interface AdditivesOptions {
    name: string,
    "add-price": string,
}