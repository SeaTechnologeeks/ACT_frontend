import { createSlice } from "@reduxjs/toolkit";
import carSlice from "./car-slice";





const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        appLoader: false,
        carDetails: false, // Loading state for retrieving car details
        criminalRecords: false, // Loading state for retrieving criminal records
        tickets: false, // Loading state for retrieving tickets
        vinDetails: false, // Loading state for retrieving VIN details
      },

      reducer: {

            isLoading (state,action){
                state.appLoader = action.payload;
            },

        fetchCarDetails(state){
            state.carDetails = true;
        },
        carDetailsSuccess(state){

            state.carDetails = false;
        },
        carDetailsFailure(state){
            state.carDetails = false;
        },



        fetchCriminalRecords(state){
            state.criminalRecords = true;
        },
        criminalRecordsSuccess(state){

            state.criminalRecords = false;
        },
        criminalRecordsFailure(state){
            state.criminalRecords = false;
        },




        fetchTickes(state){
            state.tickets = true;
        },
        ticketsSuccess(state){

            state.tickets = false;
        },
        ticketsFailure(state){
            state.tickets = false;
        },


        fetchVinDetails(state){
            state.vinDetails = true;
        },
        vinDetailsSuccess(state){

            state.vinDetails = false;
        },
        vinDetailsFailure(state){
            state.vinDetails = false;
        },


      }
});

export const {fetchCarDetails,carDetailsSuccess, carDetailsFailure,
        fetchCriminalRecords,criminalRecordsSuccess,criminalRecordsFailure,
        fetchTickes,ticketsSuccess,ticketsFailure,
        fetchVinDetails,vinDetailsFailure,vinDetailsSuccess, isLoading} = loaderSlice.actions;
export default loaderSlice.reducer;