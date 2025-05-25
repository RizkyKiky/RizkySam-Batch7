import React, { useContext, useState } from 'react';
import { ProductContext } from './context/ProductContext.jsx';
import axios from 'axios';

export default function AddProduct() {
  const { products, setProduct } = useContext(ProductContext);

  const [input, setInput] = useState();

  function handleInputProductTitle(e) {
    setInput(e.target.value);
  }

  function handleInputProductPrice(e) {
    setInput(e.target.value);
  }

  function handleInputProductCategory(e) {
    setInput(e.target.value);
  }

  function addNewProduct() {
    console.log(products);
    const id = products.length;
    setProduct([...products, { id: id + 1, title: input, price: input, category: input }]);
  }
  return (
    <div>
      <div>
        <div>
          <h4>This is Product</h4>
          <p>Add your new product :</p>
          <input onChange={handleInputProductTitle} placeholder="Input your new product"></input>
          <input onChange={handleInputProductPrice} placeholder="Input your product price"></input>
          <input onChange={handleInputProductCategory} placeholder="Input your product category"></input>
        </div>
        <button onClick={addNewProduct}>Add Product</button>
      </div>
    </div>
  );
}
