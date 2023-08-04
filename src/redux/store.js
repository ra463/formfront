import { configureStore } from "@reduxjs/toolkit";
import { createform, getFormData } from "./reducer/createformreducer";

const store = configureStore({
  reducer: {
    form: createform,
    getdata: getFormData,
  },
});

export default store;

export const server = "http://localhost:4000/api/v1";
