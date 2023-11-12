import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import carSlice from './car-slice';
import loaderSlice from './loader-slice';
import errorSlice from './error-slice';
import scanSlice from './scan-slice';



const store = configureStore({
    reducer: {
        user:authSlice,
        car:carSlice,
        loader:loaderSlice,
        error:errorSlice,
        scan:scanSlice,
    },
});


export default store;