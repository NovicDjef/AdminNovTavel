import { getchSomeUser } from "../../services/routeApi";
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from "../reducer/userReducer"

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
      const response = await getchSomeUser();
      dispatch(fetchUsersSuccess(response.data));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
};
