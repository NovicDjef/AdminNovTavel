import { getchSomeRestaurant, updateSomeRestaurant, addSomeRestaurant  } from "../../services/routeApi";
import { fetchrestaurantRequest, fetchrestaurantSuccess, fetchrestaurantFailure } from "../reducer/restaurantReducer"
import { updateRestaurantRequest, updateRestaurantSuccess, updateRestaurantFailure, addRestaurantRequest, addRestaurantSuccess, addRestaurantFailure } from "../reducer/restaurantReducer";



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

// Action pour modifier un restaurant
export const updateRestaurant = (id, data) => {
  return async (dispatch) => {
    dispatch(updateRestaurantRequest());
    try {
      const response = await updateSomeRestaurant(id, data);
      dispatch(updateRestaurantSuccess(response.data));
    } catch (error) {
      dispatch(updateRestaurantFailure(error.message));
    }
  };
};

// Action pour ajouter un restaurant
export const addRestaurant = (data) => {
  return async (dispatch) => {
    dispatch(addRestaurantRequest());
    try {
      const response = await addSomeRestaurant(data);
      dispatch(addRestaurantSuccess(response.data));
    } catch (error) {
      dispatch(addRestaurantFailure(error.message));
    }
  };
};
