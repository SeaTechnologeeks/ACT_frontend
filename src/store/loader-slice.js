// loadingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loading",
  initialState: false, // Initial state is set to false (not loading)
  reducers: {
    setLoading: (state, action) => {
      return action.payload; // Set loading state based on the action payload
    },
  },
});

export const { setLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
