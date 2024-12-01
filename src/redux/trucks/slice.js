import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchTrucksThunk, fetchTruckDetails } from "./operations";
import { initialState } from "../initialState";

const trucksSlice = createSlice({
  name: "trucks",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrucksThunk.fulfilled, (state, action) => {
        state.trucks = action.payload.items;
      })
      .addCase(fetchTruckDetails.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchTruckDetails.fulfilled, (state, action) => {
        state.truck = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTruckDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addMatcher(isAnyOf(fetchTrucksThunk.pending), (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addMatcher(isAnyOf(fetchTrucksThunk.rejected), (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addMatcher(isAnyOf(fetchTrucksThunk.fulfilled), (state) => {
        state.isLoading = false;
      });
  },
});

export const trucksReducer = trucksSlice.reducer;
