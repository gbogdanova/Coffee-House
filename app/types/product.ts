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

export interface SizeOption {
    size: string,
    "add-price": number,
}
export interface AdditivesOptions {
    name: string,
    "add-price": number,
}