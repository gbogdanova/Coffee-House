"use client";

import { useState, useEffect } from 'react';
import { Product } from '@/app/types/product';
import { Container } from '@/app/components/Container';
import { ProductDetails } from '@/app/components/productDetails/ProductDetails';
import { useCart } from '@/hooks/useCart';

export default function ProductPage ({params}: {params: {productID: string}}){
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/gbogdanova/coffee-house-data/main/products.json');
        if(!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const jsonData: Product[]= await response.json();
        const selectedProduct = jsonData.find((product: Product) => product.id === params.productID);
        setProduct(selectedProduct || null);
      } catch(error) {
        setError('Error fetching and parsing data.');
        console.error(error);
      }
      
    };
    fetchData();
  }, [params.productID]);
    
  return (
    <div>
      {product ? (
        <Container>
          <ProductDetails product={product}/>
        </Container>        
        ) : (
        <div>Loading...</div>
        )}
      </div>
  )
}