import React from 'react';
import { connect } from 'react-redux';

import { hideCart } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/cart-icon.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCart, itemCount }) => {
  return (
    <div className='cart-icon' onClick={() => toggleCart()}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  // write a dispatch function to show or hide cart
  toggleCart: () => dispatch(hideCart()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce((accumQty, item) => accumQty + item.quantity, 0),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
