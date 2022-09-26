import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
  let total = 0;
  let shipping = 0;
  for(const product of cart){
    console.log(product)
    total = total + product.price;
    shipping = shipping + product.shipping;
  };
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = (total + shipping + tax).toFixed(2);
  return (
    <div className="cart">
          <h2><u>Order Summary</u></h2>
          <p>Slected Items: <strong>{cart.length}</strong></p>
          <p>Total Price: <strong>${total}</strong></p>
          <p>Total Shipping Charge: <strong>${shipping}</strong></p>
          <p>Tax: <strong>${tax}</strong></p>
          <h3>Grand Total: ${grandTotal}</h3>
    </div>
  );
};

export default Cart;