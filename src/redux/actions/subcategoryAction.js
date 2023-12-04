import useGetData from "../../AxiosHooks/useGetData";
import { useInsertData } from "../../AxiosHooks/useInsertData";
import {
  CREATE_SUBCATEGORY,
  GET_ERROR,
  GET_SUBCATEGORIES_OF_CATEGORY,
} from "../types";

export const createSubcategory = (data) => async (dispatch) => {
  try {
    const response = await useInsertData("/api/v1/subcategories", data);
    dispatch({
      type: CREATE_SUBCATEGORY,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const getSubcategoriesOfOneCategory = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/categories/${id}/subcategories`);
    dispatch({
      type: GET_SUBCATEGORIES_OF_CATEGORY,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
