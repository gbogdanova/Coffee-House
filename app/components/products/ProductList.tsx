import React, { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '@/app/types/product';
import { RxReload } from "react-icons/rx";

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);

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

  const loadMore = () => {
    setVisibleCount( prevCount => prevCount + 4);
  }

  
  return (
    <div>
    {products ? (
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
          {products.slice(0, visibleCount).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        { visibleCount < products.length && (
          <div className="flex justify-center pt-4">
            <button onClick={loadMore}  className="flex items-center justify-center w-12 h-12 rounded-full border border-container  text-container hover:text-light hover:bg-container"><RxReload size={20}/></button>
          </div>
        )}
      </div>
    ) : (
      <div>...loading...</div>
    )}
  </div>  
  )
}
