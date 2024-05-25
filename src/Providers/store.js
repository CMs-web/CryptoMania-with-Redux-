import { configureStore } from "@reduxjs/toolkit";
import coinReducer from './Coins/CoinsSlice'
import authReducer from './Auth/authSlice'

const store = configureStore({
    reducer: {
        coins: coinReducer,
        auth : authReducer,
    }
})

export default store;