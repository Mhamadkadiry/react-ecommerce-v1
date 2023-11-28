import { CREATE_CATEGORY, GET_ALL_CATEGORIES, GET_ERROR } from "../types";
import useGetData from "../../Hooks/useGetData";
import { useInsertDataWithImage } from "../../Hooks/useInsertData";

export const getAllCategories = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/categories?limit=${limit}`);
    dispatch({
      type: GET_ALL_CATEGORIES,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const getSpecificPageCategories = (limit, page) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/categories?limit=${limit}&page=${page}`
    );
    dispatch({
      type: GET_ALL_CATEGORIES,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const createCategory = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(
      "/api/v1/categories",
      formData
    );
    dispatch({
      type: CREATE_CATEGORY,
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
