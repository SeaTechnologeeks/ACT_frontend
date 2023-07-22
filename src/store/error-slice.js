import { createSlice } from "@reduxjs/toolkit";



const errorSlice = createSlice({
    name: 'error',
    initialState:  {
        carDetails: null, // Error state for retrieving car details
        criminalRecords: null, // Error state for retrieving criminal records
        tickets: null, // Error state for retrieving tickets
        vinDetails: null, // Error state for retrieving VIN details
      },

      reducer: {
        carDetailsError(state, action) {
            state.carDetails = action.payload;
        },
        criminalRecordsError(state, action) {


            state.criminalRecords = action.payload;
        },
        ticketsError(state, action) {

            state.tickets = action.payload;

        },
        vinDetailsError(state, action) {


            state.vinDetails = action.payload;

        },
    },
})

export const {carDetailsError, criminalRecordsError, ticketsError, vinDetailsError} = errorSlice.actions;
export default errorSlice.reducer;