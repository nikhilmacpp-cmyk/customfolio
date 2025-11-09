import { configureStore } from "@reduxjs/toolkit";
import viewReducer from './viewSlice';

export const store = configureStore({
    reducer:{
        view:viewReducer // state.view will be managed by viewReducer
    }
})