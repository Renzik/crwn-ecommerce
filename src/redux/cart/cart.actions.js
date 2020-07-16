import { CartActionTypes } from './cart.types';

// Action Creators
export const hideCart = () => {
  return {
    type: CartActionTypes.TOOGLE_CART_HIDDEN,
  };
};
