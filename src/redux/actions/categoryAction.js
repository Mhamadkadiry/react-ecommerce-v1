import {
  CREATE_CATEGORY,
  GET_ALL_CATEGORIES,
  GET_ERROR,
  GET_ONE_CATEGORY,
} from "../types";
import useGetData from "../../AxiosHooks/useGetData";
import { useInsertDataWithImage } from "../../AxiosHooks/useInsertData";

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

export const getOneCategory = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/categories/${id}`);
    dispatch({
      type: GET_ONE_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
