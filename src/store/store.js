import { configureStore } from "@reduxjs/toolkit";
import mailSlice from "./mailSlice";
import authSlice from "./authSlice";

const store = configureStore({
    reducer: {
        mail: mailSlice,
        auth: authSlice
    },
});


export default store;