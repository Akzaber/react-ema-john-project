import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
  const {img, name, price, seller, ratings} = props.product
  const {handleButtonToCart, product} = props;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p><small>Manufacturer: {seller}</small></p>
      <p><small>Rating: {ratings}</small></p>
      <div>
        <button onClick={() => handleButtonToCart(product)}  className='cart-button' ><p style={{marginRight: '5px'}}>Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Product;