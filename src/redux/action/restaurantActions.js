import { getchSomeRestaurant } from "../../services/routeApi";
import { fetchrestaurantRequest, fetchrestaurantSuccess, fetchrestaurantFailure } from "../reducer/restaurantReducer"

export const fetchRestaurants = () => {
  return async (dispatch) => {
    dispatch(fetchrestaurantRequest());
    try {
      const response = await getchSomeRestaurant();
      dispatch(fetchrestaurantSuccess(response.data));
    } catch (error) {
      dispatch(fetchrestaurantFailure(error.message));
    }
  };
};
