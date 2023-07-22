import { createSlice } from "@reduxjs/toolkit";





const authSlice = createSlice({
    name: 'user',
    initialState:{
        role: null, // User role (official, car-dealership, public)
        isAuthenticated: false, // User authentication status
        userDetails: {}, // User details (name, ID, etc.)
      },

      reducer: {

        login(state) {
            state.user.isAuthenticated = true;
        },

        logout(state) {

                state.user.isAuthenticated =false;

        },

        userRole(state,action)  {
            const role = action.payload;
            state.user.role = role; 

        },
        userDetails(state, action) {
            const details = action.payload;
            state.user.details = details;
        },


      },





});
export const {login, logout, userRole, userDetails } =  authSlice.actions;
export default authSlice.reducer;