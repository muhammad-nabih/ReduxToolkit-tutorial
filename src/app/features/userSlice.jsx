import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userFetch = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

const initialState = {
  users: [],
  status: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(userFetch.fulfilled, (currentState, { payload }) => {
      currentState.status = "success";
      currentState.users = payload;
    });
    builder.addCase(userFetch.pending, (currentState) => {
      currentState.status = "loading";
    });
    builder.addCase(userFetch.rejected, (currentState) => {
      currentState.status = "error";
      currentState.error = "The Error";
    });
  },
});

export default userSlice.reducer;
