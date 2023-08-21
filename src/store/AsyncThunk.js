import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {REACT_APP_BACKEND_URL} from "@env"



const baseURL = REACT_APP_BACKEND_URL;




export const vinFetch = createAsyncThunk('fetchVin', async (vin) => {

    try{
    
  
        const res = await axios.get(`${baseURL}/api/decode?vin=${vin}`)
    
      return res.data;
      
      }catch(error){
        
        throw error;
      }
    });


    export const TicketsFetch = createAsyncThunk('fetchTickets', async (vin) => {

        try{
        
      
            const res = await axios.get(`${baseURL}/api/tickets?vin=${vin}`)
      
          return res.data;
          }catch(error){
            
            throw error;
          }
        });


        export const RecordsFetch = createAsyncThunk('fetcRecords', async (vin) => {

            try{
            
          
                const res = await axios.get(`${baseURL}/api/criminal_records?vin=${vin}`)
          
              return res.data;
              }catch(error){
                
                throw error;
              }
            });