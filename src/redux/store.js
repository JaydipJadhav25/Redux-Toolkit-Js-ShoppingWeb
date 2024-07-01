import { configureStore } from '@reduxjs/toolkit'
import cardReducer from "./slice/cardslice"
import counReducer from  "./slice/cartCount"

export const store = configureStore({
  reducer: {
    cart : cardReducer,
    countCart : counReducer,
  
  },
})
