import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  REACT_APP_VIN_DECODE_BACKEND_URL,
  REACT_APP_TICKETS_BACKEND_URL,
  REACT_APP_CRIMINAL_RECORDS_BACKEND_URL} from "@env"



const VinbaseURL = REACT_APP_VIN_DECODE_BACKEND_URL;
const TicketsbaseURL = REACT_APP_TICKETS_BACKEND_URL;
const RecordsbaseURL = REACT_APP_CRIMINAL_RECORDS_BACKEND_URL;




export const vinFetch = createAsyncThunk('fetchVin', async (vin) => {

    try{
    
  
        const res = await axios.get(`${VinbaseURL}/api/decode?vin=${vin}`)
    
      return res.data;
      
      }catch(error){
        
        throw error;
      }
    });


    export const TicketsFetch = createAsyncThunk('fetchTickets', async (vin) => {

        try{
        
      
            const res = await axios.get(`${TicketsbaseURL}/api/tickets?vin=${vin}`)
      
          return res.data;
          }catch(error){
            
            throw error;
          }
        });


        export const RecordsFetch = createAsyncThunk('fetcRecords', async (vin) => {

            try{
            
          
                const res = await axios.get(`${RecordsbaseURL}/api/criminal_records?vin=${vin}`)
          
              return res.data;
              }catch(error){
                
                throw error;
              }
            });