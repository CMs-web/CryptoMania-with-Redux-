import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "./authServices";

const isUserExits = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: isUserExits ? isUserExits : null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
    route : "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = "";
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
        state.message = "";
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = "";
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.user = null;
      })
      .addCase(getRoute.fulfilled, (state, action) => {
        state.route = action.payload;
      });
  },
});

export const register = createAsyncThunk(
  "REGISTER/AUTH",
  async (formData, thunkAPI) => {
    try {
      return await authServices.registerUser(formData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const login = createAsyncThunk("LOGIN/AUTH", async (formData) => {
  try {
    return await authServices.loginUser(formData);
  } catch (error) {
    console.log(error);
  }
});
export const logOutUser = createAsyncThunk("LOGOUT/AUTH", async () => {
  localStorage.removeItem("user");
});
export const getRoute = createAsyncThunk("ROUTE/ROUTER", async (route) => {
  return route;
});

export default authSlice.reducer;
