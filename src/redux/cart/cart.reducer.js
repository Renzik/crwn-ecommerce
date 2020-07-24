import { CartActionTypes } from './cart.types';
import { checkForDuplicates } from './cart.utils';

//state
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

//reducer
const cartReducer = (state = INITIAL_STATE, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case CartActionTypes.TOOGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    case CartActionTypes.ADD_ITEM:
      return { ...state, cartItems: checkForDuplicates(state.cartItems, action.payload) };
    default:
      return state;
  }
};

export default cartReducer;
