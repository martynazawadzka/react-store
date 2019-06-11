import { ACTION_TYPES } from "../actions";

const initState = [];

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART:
      return [...state, action.product];
    default:
      return state;
  }
};
export default cartReducer;
