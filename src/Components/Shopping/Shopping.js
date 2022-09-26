import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shopping.css'

const Shopping = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, []);

  const handleButtonToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.name)
  }

  return (
    <div className="shop-container">
      <div className="products-container">
        <h1 style={{textAlign: 'center'}}>Total Available Products: {products.length}</h1>
          <div className='product-container'>
          {
            products.map(product => <Product handleButtonToCart={handleButtonToCart} key={product.id} product={product}></Product>)
          }
          </div>
      </div>
      <div className="cart-container">
          <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shopping;