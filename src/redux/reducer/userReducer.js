
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsersRequest(state) {
      state.loading = true;
    },
    fetchUsersSuccess(state, action) {
      state.loading = false;
      state.users = action.payload;
      state.error = null;
    },
    fetchUsersFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    }
  }
})
export const { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } = userSlice.actions;

export default userSlice.reducer;