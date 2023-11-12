
import { createSlice } from "@reduxjs/toolkit";

const scanSlice = createSlice({
  name: "scanData",
  initialState: [], 
  reducers: {
    setDetails: (state, action) => {
      return action.payload; 
    },
  },
});

export const { setDetails} = scanSlice.actions;
export default scanSlice.reducer;
