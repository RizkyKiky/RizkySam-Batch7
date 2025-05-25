import { useState, useEffect, useContext } from 'react';
import { ProductContext } from './context/ProductContext.jsx';
import axios from 'axios';
import DeleteProduct from './DeleteProduct.jsx';

export default function ListProduct() {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <div>
        List Product :{' '}
        {products.map((product) => (
          <div key={product.id} style={{ border: 'solid 2px', margin: '5px' }}>
            <h3>{product.title}</h3>
            <p>Price : {product.price}</p>
            <p>Category : {product.category}</p>
            <DeleteProduct key={product.id} id={product.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
