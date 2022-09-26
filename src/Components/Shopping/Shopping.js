import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for(const id in storedCart){
      const addedProduct = products.find(product => product.id === id);
      if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct)
      }
    }
    setCart(savedCart);
  }, [products])

  const handleButtonToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find(product => product.id === selectedProduct.id);
    if(!exists){
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    }
    else{
      const rest = cart.filter(product => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists]
    }
    setCart(newCart);
    addToDb(selectedProduct.id)
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