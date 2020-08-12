import React from 'react';

import { CartItemContainer, Image, ItemDetailsContainer } from './cart-item-styles';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer className='cart-item'>
      <Image src={imageUrl} alt='item' />
      <ItemDetailsContainer className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
