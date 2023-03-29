import { createSlice } from "@reduxjs/toolkit";

export const rentalFormSlice = createSlice({
  name: "formDeets",
  initialState: {
    formDeets: [],
    count: 0,
  },

  reducers: {
    formData: (state, action) => {
      state.formDeets = action.payload;
    },
    increament: (state) => {
      state.count++;
    },
  },
});

export const { formData, increament } = rentalFormSlice.actions;

export const selectFormData = (state) => console.log(state);

export default rentalFormSlice.reducer;
