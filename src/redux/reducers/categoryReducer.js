import {
  CREATE_CATEGORY,
  GET_ALL_CATEGORIES,
  GET_ERROR,
  GET_ONE_CATEGORY,
} from "../types";
const inital = {
  categories: [],
  specificCategory: [],
  loading: true,
};
const categoryReducer = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case GET_ONE_CATEGORY:
      return {
        specificCategory: action.payload,
        loading: false,
      };
    case CREATE_CATEGORY:
      return {
        categories: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
