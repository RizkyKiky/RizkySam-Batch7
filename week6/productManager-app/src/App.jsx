import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ListProduct from './ListProduct.jsx';
import AddProduct from './AddProduct.jsx';

function App() {
  return (
    <>
      <AddProduct />
      <ListProduct />
    </>
  );
}

export default App;
