import { configureStore } from "@reduxjs/toolkit";
import { createform, getFormData } from "./reducer/createformreducer";

const store = configureStore({
  reducer: {
    form: createform,
    getdata: getFormData,
  },
});

export default store;

export const server = "https://formback.vercel.app/api/v1";
