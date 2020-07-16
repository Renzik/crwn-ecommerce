import { CartActionTypes } from './cart.types';

//state
const INITIAL_STATE = {
  hidden: true,
};

//reducer
const cartReducer = (state = INITIAL_STATE, action) => {
  // eslint-disable-next-line default-case
  // console.log(action, 'action');
  switch (action.type) {
    case CartActionTypes.TOOGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    default:
      return state;
  }
};

export default cartReducer;
