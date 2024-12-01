import { createAsyncThunk } from "@reduxjs/toolkit";
import { campersApi } from "../../config/campersApi";

export const fetchTrucksThunk = createAsyncThunk(
  "trucks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await campersApi.get("/");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTruckDetails = createAsyncThunk(
  "trucks/fetchById",
  async (id, thunkApi) => {
    try {
      const { data } = await campersApi.get(`/campers/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
