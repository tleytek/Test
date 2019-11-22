import { FETCH_CRYPTO } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CRYPTO:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
