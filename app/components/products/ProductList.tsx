import React, { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '@/app/types/product';

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/gbogdanova/coffee-house-data/main/products.json');

        if(!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const jsonData: Product[]= await response.json();
        setProducts(jsonData);
      } catch(error) {
        setError('Error fetching and parsing data.');
        console.error(error);
      }
      
    };
    fetchData();
  }, []);
  
  return (
    <div>
    {products ? (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    ) : (
      <div>...loading...</div>
    )}
  </div>  
  )
}
