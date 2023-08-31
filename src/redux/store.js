import { configureStore } from "@reduxjs/toolkit";
import rolesReducer from "./slices/rolesSlice";

export const store  = configureStore({
    reducer: {
        roles: rolesReducer
    }
})