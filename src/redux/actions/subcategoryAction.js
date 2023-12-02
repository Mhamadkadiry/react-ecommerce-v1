import { useInsertData } from "../../AxiosHooks/useInsertData";
import { CREATE_SUBCATEGORY, GET_ERROR } from "../types";

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
