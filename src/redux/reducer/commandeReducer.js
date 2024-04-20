
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  commandes: [],
  loading: false,
  error: null
};

const commandeslice = createSlice({
  name: "commandes",
  initialState,
  reducers: {
    fetchCommandesRequest(state) {
      state.loading = true;
    },
    fetchCommandesSucces(state, action) {
      state.loading = false;
      state.commandes = action.payload;
      state.error = null;
    },
    fetchCommandesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    }
  }
})
export const { fetchCommandesRequest, fetchCommandesSucces, fetchCommandesFailure } = commandeslice.actions;

export default commandeslice.reducer;