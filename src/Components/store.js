import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './slice.js'
const store = configureStore({
   reducer : {
    dataKey : dataReducer
   }
})

export default store;