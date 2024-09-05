export interface Product {
    id: string,
    name: string,
    description: string,
    price: number,
    category: string,
    sizes: {
      [key: string]: SizeOption;
    },
    additives: AdditivesOptions[],
    image: string,
  }

interface SizeOption {
    size: string,
    "add-price": number,
}
interface AdditivesOptions {
    name: string,
    "add-price": number,
}