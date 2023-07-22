import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import carSlice from './car-slice';
import loaderSlice from './loader-slice';
import errorSlice from './error-slice';



const store = configureStore({
    reducer: {
        user:authSlice,
        car:carSlice,
        loader:loaderSlice,
        error:errorSlice,
    },
});


export default store;