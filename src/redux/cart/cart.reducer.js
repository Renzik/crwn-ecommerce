import { cartActionTypes } from './cart.types';
import { checkForDuplicates, clearItemFromCart, decreaseOrRemoveFromCheckout } from './cart.utils';

//state
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

//reducer
const cartReducer = (state = INITIAL_STATE, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case cartActionTypes.TOOGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    case cartActionTypes.ADD_ITEM:
      return { ...state, cartItems: checkForDuplicates(state.cartItems, action.payload) };

    case cartActionTypes.REMOVE_ITEM:
      return { ...state, cartItems: decreaseOrRemoveFromCheckout(state.cartItems, action.payload) };

    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return { ...state, cartItems: clearItemFromCart(state.cartItems, action.payload) };

    default:
      return state;
  }
};

export default cartReducer;
