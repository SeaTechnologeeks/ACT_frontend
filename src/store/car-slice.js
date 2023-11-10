import {  createSlice } from "@reduxjs/toolkit";
import { RecordsFetch, TicketsFetch, vinFetch } from "./AsyncThunk";

//Vin Thunk 


const carSlice = createSlice({
    name: 'car',
    initialState:  {
      
        details: [], // Car details retrieved from scanning license disk
        criminalRecords: [], // Criminal records associated with the car
        tickets: [], // Tickets associated with the car
        vinDetails: [], // VIN (Vehicle Identification Number) details
        loading: false,
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
        loading(state, action) {
          state.loading = action.payload;
        },
      },
      extraReducers: (builder) => {
        builder


        .addCase(vinFetch.pending, (state) => {
          state.loading = true;
          
        })
          .addCase(vinFetch.fulfilled, (state, action) =>{
        
            state.vinDetails = action.payload;
            state.loading = false;
           
          })
          .addCase(vinFetch.rejected, (state, action)=>{
            state.vinDetails = action.payload;
            state.loading = false;
          })



          .addCase(TicketsFetch.pending, (state) => {
            state.loading = true;
            
          })

          .addCase(TicketsFetch.fulfilled, (state, action) =>{
            state.tickets = action.payload;
            state.loading = false;
          })
          .addCase(TicketsFetch.rejected, (state, action)=>{
            state.tickets = action.payload;
            state.loading = false;
          })



          .addCase(RecordsFetch.pending, (state) => {
            state.loading = true;
         
            
          })

          
          .addCase(RecordsFetch.fulfilled, (state, action) =>{
            state.criminalRecords = action.payload;
            state.loading = false;
          })
          .addCase(RecordsFetch.rejected, (state, action)=>{
            state.criminalRecords = action.payload;
            state.loading = false;
          })
      }


});
export const {fetchCarDetails, fetchCriminalRecords, fetchTickets, vinDetails} = carSlice.actions;
export default carSlice.reducer;