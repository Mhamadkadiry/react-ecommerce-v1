import useGetData from "../../AxiosHooks/useGetData";
import { useInsertDataWithImage } from "../../AxiosHooks/useInsertData";
import { CREATE_BRAND, GET_ALL_BRANDS, GET_ERROR } from "../types";

export const getAllBrands = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/brands?limit=${limit}`);
    dispatch({
      type: GET_ALL_BRANDS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const getSpecificPageBrands = (limit, page) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/brands?limit=${limit}&page=${page}`
    );
    dispatch({
      type: GET_ALL_BRANDS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const createBrand = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage("/api/v1/brands", formData);
    dispatch({
      type: CREATE_BRAND,
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
