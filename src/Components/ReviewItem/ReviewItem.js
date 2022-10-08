import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({product, handleDelete}) => {
  const {id, img, category, price, shipping, quantity} = product;
  return (
    <div className='reviewItem-container'>
      <div>
        <img src={img} alt="" />
      </div>
      <div className='item-detail-container'>
          <div className='detail-container'>
            <p>{category}</p>
            <p><small>Price: {price}</small></p>
            <p><small>Shipping-Charge: {shipping}</small></p>
            <p><small>Quantity: {quantity}</small></p>
          </div>
          <div>
            <button onClick={() => handleDelete(id)} className='delete-button'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
          </div>
      </div>
      
    </div>
  );
};

export default ReviewItem;