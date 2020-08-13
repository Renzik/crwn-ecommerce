import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { hideCart } from '../../redux/cart/cart.actions';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { CartIconContainer, ItemCountSpan, ShoppingIcon } from './cart-icon.styles';

const CartIcon = ({ toggleCart, itemCount }) => {
  return (
    <CartIconContainer className='cart-icon' onClick={() => toggleCart()}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCountSpan className='item-count'>{itemCount}</ItemCountSpan>
    </CartIconContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  // write a dispatch function to show or hide cart
  toggleCart: () => dispatch(hideCart()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
