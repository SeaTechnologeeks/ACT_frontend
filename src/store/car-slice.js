import { createSlice } from "@reduxjs/toolkit";


const carSlice = createSlice({
    name: 'car',
    initialState:  {
        details: null, // Car details retrieved from scanning license disk
        criminalRecords: [], // Criminal records associated with the car
        tickets: [], // Tickets associated with the car
        vinDetails: null, // VIN (Vehicle Identification Number) details
      },

      reducer: {

        fetchCarDetails (state, action){
            const details = action.payload;
            state.details = details;

        },
        fetchCriminalRecords (state, action){
          const records = action.payload;
          state.records = records;

        },
        fetchTickets (state, action){
          const tickets = action.payload;
          state.tickets = tickets;

        },
        vinDetails (state, action){
          const details = action.payload;
          state.vinDetails = details;

        },

      },


});
export const {fetchCarDetails, fetchCriminalRecords, fetchTickets, vinDetails} = carSlice.actions;
export default carSlice.reducer;