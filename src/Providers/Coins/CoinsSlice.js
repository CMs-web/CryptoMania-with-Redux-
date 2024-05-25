import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSingleCoin, fetchTrendCoins } from "./coinsServices";

const coinsSlice = createSlice({
  name: "coins",
  initialState: {
    isLoading: false,
    isError: false,
    isSuccess: false,
      coins: [],
    singleCoin : [],
  },
  reducers: {},
  extraReducers: (builder) => {
      builder
        .addCase(trendingCoins.pending, (state) => {
          (state.isLoading = true),
            (state.isError = false),
            (state.isSuccess = false),
            (state.coins = []);
        })
        .addCase(trendingCoins.fulfilled, (state, action) => {
          (state.isLoading = false),
            (state.isError = false),
            (state.isSuccess = true),
            (state.coins = action.payload);
        })
        .addCase(trendingCoins.rejected, (state) => {
          (state.isLoading = false),
            (state.isError = true),
            (state.isSuccess = false),
            (state.coins = []);
        })
        .addCase(fetchSingle.pending, (state) => {
          (state.isLoading = true),
            (state.isError = false),
            (state.isSuccess = false),
            (state.singleCoin = []);
        })
        .addCase(fetchSingle.fulfilled, (state, action) => {
          (state.isLoading = false),
            (state.isError = false),
            (state.isSuccess = true),
            (state.singleCoin = action.payload);
        })
        .addCase(fetchSingle.rejected, (state) => {
          (state.isLoading = false),
            (state.isError = true),
            (state.isSuccess = false),
            (state.singleCoin = []);
        });
  },
});


export const trendingCoins = createAsyncThunk("FETCH/TRENDCOINS", async () => {
  try {
    return fetchTrendCoins();
  } catch (error) {
    console.log(error);
  }
});
export const fetchSingle = createAsyncThunk("FETCH/SINGLECOINS", async (id) => {
  try {
    return fetchSingleCoin(id);
  } catch (error) {
    console.log(error);
  }
});
export default coinsSlice.reducer;
