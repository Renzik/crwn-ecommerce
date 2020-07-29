import { cartActionTypes } from './cart.types';

// Action Creators
export const hideCart = () => {
  return {
    type: cartActionTypes.TOOGLE_CART_HIDDEN,
  };
};

export const addItem = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = item => {
  return {
    type: cartActionTypes.REMOVE_ITEM,
    payload: item,
  };
};

export const deleteFromCart = id => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: id,
});
