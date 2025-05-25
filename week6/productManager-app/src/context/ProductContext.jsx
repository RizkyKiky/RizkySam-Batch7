import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        console.log(response.data.products);
        setProduct(response.data.products);
      })
      .catch((response) => {
        console.error('Data is unavailable:', response);
      });
  }, []);
  return <ProductContext.Provider value={{ products, setProduct }}>{children}</ProductContext.Provider>;
};
