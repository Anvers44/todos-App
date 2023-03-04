import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./features/userslice";

const store=configureStore({
    reducer:{user:userReducer}
})

export default store