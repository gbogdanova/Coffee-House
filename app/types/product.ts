export interface Product {
    id: string,
    name: string,
    description: string,
    price: number,
    category: string,
    sizes: {
      [key: string]: SizeOption;
    },
    additives: AdditivesOptionsType[],
    image: string,
  }

export interface SizeOption {
    size: string,
    "add-price": number,
}
export interface AdditivesOptionsType {
    name: string,
    "add-price": number,
}

export type CartProductType = {
  id: string,
  name: string, 
  category: string,
  size: string,
  additives: string[];
  price1: number,
  quantity: number,
  price: number,
  image: string,
}