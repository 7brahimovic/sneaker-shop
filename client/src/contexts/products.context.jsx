import { createContext, useState } from 'react';

import PRODUCTS from '../shop-data.json';

import GIRLS_DATA from '../girls.data'

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(GIRLS_DATA);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}