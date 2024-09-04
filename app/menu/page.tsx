'use client';

import React from 'react';
import { Container } from '../components/Container';
import { ProductList } from '../components/products/ProductList';

const Menu = () => {
  return (
    <Container>
      <ProductList/>
    </Container>
  );
};

export default Menu;