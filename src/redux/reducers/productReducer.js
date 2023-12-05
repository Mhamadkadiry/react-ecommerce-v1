import {
  CREATE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_ERROR,
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_REVIEWS,
  GET_SIMILAR_PRODUCTS,
} from "../types";

const inital = {
  products: [],
  allProducts: [],
  specificProduct: [],
  similarProducts: [],
  productReviews: [],
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
    case GET_PRODUCT_DETAILS:
      return {
        ...state,
        specificProduct: action.payload,
        loading: false,
      };
    case GET_SIMILAR_PRODUCTS:
      return {
        ...state,
        similarProducts: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        loading: false,
      };
    case GET_PRODUCT_REVIEWS:
      return {
        ...state,
        productReviews: action.payload,
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
