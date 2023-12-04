import { CREATE_PRODUCT, GET_ERROR } from "../types";

const inital = {
  products: [],
  loading: true,
};
const productReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
