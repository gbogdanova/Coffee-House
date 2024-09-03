import React from 'react';
import Link from 'next/link';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({product}: ProductCardProps) => {
  return (
    <div>
      <Link href='#'>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </Link>
    </div>
  )
}
