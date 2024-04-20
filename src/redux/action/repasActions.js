import { getchSomeRepas } from "../../services/routeApi";
import { fetchRepasRequest, fetchRepassuccess, fetchRepasFailure } from "../reducer/repasReducer"

export const fetchRepas = () => {
  return async (dispatch) => {
    dispatch(fetchRepasRequest());
    try {
      const response = await getchSomeRepas();
      dispatch(fetchRepassuccess(response.data));
    } catch (error) {
      dispatch(fetchRepasFailure(error.message));
    }
  };
};
