import { CartActionTypes } from './cart.types';

// Action Creators
export const hideCart = () => {
  return {
    type: CartActionTypes.TOOGLE_CART_HIDDEN,
  };
};

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
