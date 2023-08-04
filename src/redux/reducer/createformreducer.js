import { createReducer } from "@reduxjs/toolkit";

export const createform = createReducer(
  {},
  {
    createformRequest: (state) => {
      state.loading = true;
    },
    createformSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    createformFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);

export const getFormData = createReducer(
  {},
  {
    getFormDataRequest: (state) => {
      state.loading = true;
    },
    getFormDataSuccess: (state, action) => {
      state.loading = false;
      state.formData = action.payload.formData;
    },
    getFormDataFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
