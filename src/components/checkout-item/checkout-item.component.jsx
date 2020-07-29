import React from 'react';
import { connect } from 'react-redux';

import { deleteFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({
  cartItem,
  deleteItemFromCartDispatcher,
  addItemDispatcher,
  removeOrDecreaseDispatcher,
}) => {
  const { imageUrl, name, quantity, price, id } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeOrDecreaseDispatcher(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItemDispatcher(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div onClick={() => deleteItemFromCartDispatcher(id)} className='remove-button'>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteItemFromCartDispatcher: id => dispatch(deleteFromCart(id)),
  addItemDispatcher: item => dispatch(addItem(item)),
  removeOrDecreaseDispatcher: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
