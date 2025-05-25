import React, { useState, useContext } from 'react';
import axios from 'axios';
import { ProductContext } from './context/ProductContext.jsx';

export default function DeleteProduct({ id }) {
  const { products, setProduct } = useContext(ProductContext);

  function handleDeleteProduct() {
    const deletedProducts = products.filter((data) => data.id !== id);
    setProduct(deletedProducts);
  }
  return (
    <div>
      <button type="button" onClick={() => handleDeleteProduct(products.id)}>
        Delete Item
      </button>
    </div>
  );
}
