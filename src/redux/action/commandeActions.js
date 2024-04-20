import { getchSomecommandes } from "../../services/routeApi";
import { fetchCommandesRequest, fetchCommandesSucces, fetchCommandesFailure } from "../reducer/commandeReducer"

export const fetchcommandes = () => {
  return async (dispatch) => {
    dispatch(fetchCommandesRequest());
    try {
      const response = await getchSomecommandes();
      dispatch(fetchCommandesSucces(response.data));
    } catch (error) {
      dispatch(fetchCommandesFailure(error.message));
    }
  };
};
