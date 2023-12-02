import { CREATE_SUBCATEGORY, GET_ERROR } from "../types";

const inital = {
  subcategories: [],
  loading: true,
};
const subcategoryReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_SUBCATEGORY:
      return {
        subcategories: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        subcategories: action.payload,
      };
    default:
      return state;
  }
};

export default subcategoryReducer;
