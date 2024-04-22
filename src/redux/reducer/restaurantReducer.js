
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurants: [],
  loading: false,
  error: null
};

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    fetchrestaurantRequest(state) {
      state.loading = true;
    },
    fetchrestaurantSuccess(state, action) {
      state.loading = false;
      state.restaurants = action.payload;
      state.error = null;
    },
    fetchrestaurantFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateRestaurantRequest(state) {
      state.loading = true;
      state.error = null;
    },
    updateRestaurantSuccess(state, action) {
      state.loading = false;
      const updatedRestaurant = action.payload;
      state.restaurants = state.restaurants.map(restaurant =>
        restaurant.id === updatedRestaurant.id ? updatedRestaurant : restaurant
      );
    },
    updateRestaurantFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addRestaurantRequest(state) {
      state.loading = true;
    },
    addRestaurantSuccess(state, action) {
      state.loading = false;
      state.restaurants.push(action.payload);
      state.error = null;
    },
    addRestaurantFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  fetchrestaurantRequest,
  fetchrestaurantSuccess, 
  fetchrestaurantFailure,
  updateRestaurantRequest, 
  updateRestaurantSuccess, 
  updateRestaurantFailure, 
  addRestaurantRequest, 
  addRestaurantSuccess, 
  addRestaurantFailure 
 } = restaurantSlice.actions;

export default restaurantSlice.reducer;