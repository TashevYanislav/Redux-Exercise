import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log("Increment pending");
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        }
      )
      .addCase(decrementAsync.pending, () => {
        console.log("Decrement pending");
      })
      .addCase(
        decrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value -= action.payload;
        }
      );
  },
});
export const incrementAsync = createAsyncThunk<number, number, {}>(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);
export const decrementAsync = createAsyncThunk<number, number, {}>(
  "counter/decrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
