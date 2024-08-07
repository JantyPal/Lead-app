import { configureStore } from "@reduxjs/toolkit";
import  leadDetail  from "../features/leadDeatilSlice";


export const store = configureStore({
    reducer : {
        app : leadDetail,
    }
});