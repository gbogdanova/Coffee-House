"use client";

import { useState, useEffect } from 'react';
import { Product } from '@/app/types/product';
import { Container } from '@/app/components/Container';
import { ProductDetails } from '@/app/components/productDetails/ProductDetails';

interface IParam {
  productID: string;
}

export default function ProductPage({ params }: { params: IParam }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://raw.githubusercontent.com/gbogdanova/coffee-house-data/main/products.json');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData: Product[] = await response.json();
        const selectedProduct = jsonData.find((product: Product) => product.id === params.productID);

        if (!selectedProduct) {
          throw new Error(`Product with ID ${params.productID} not found`);
        }

        setProduct(selectedProduct);
      } catch (err) {
        setError((err as Error).message || 'Error fetching and parsing data.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params.productID]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {product ? (
        <Container>
          <ProductDetails product={product} />
        </Container>
      ) : (
        <div>Product not found</div>
      )}
    </div>
  );
}