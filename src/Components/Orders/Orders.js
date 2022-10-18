import React, { useState } from 'react';
import './Orders.css';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
  const {initialCart} = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const handleDeleteAll = () => {
    setCart([]);
    deleteShoppingCart();
  }

  const handleDelete = (id) => {
    const remainingProduct = cart.filter(product => product.id !== id);
    if(remainingProduct){
      setCart(remainingProduct);
      removeFromDb(id);
    }
  }
  return (
    <div>
      <div className='shop-container'>
          <div className='orders-container'>
            {
              cart.map(product => <ReviewItem key={product.id} handleDelete={handleDelete} product={product}></ReviewItem>)
            }
            {
              cart.length === 0 && <h2>No Product Show For Review Please Shop First <Link to='/'>Click Here</Link></h2>
            }
          </div>
          <div className='cart-container'>
            <Cart handleDeleteAll={handleDeleteAll} cart={cart}>
              <Link to='/shipping'>
                  <button>Procced Shipping</button>
              </Link>
            </Cart>
          </div>
      </div>
    </div>
  );
};

export default Orders;