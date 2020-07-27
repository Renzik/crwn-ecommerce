import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { hideCart } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/cart-icon.svg';

import './cart-icon.styles.scss';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCart, itemCount }) => {
  return (
    <div className='cart-icon' onClick={() => toggleCart()}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
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
