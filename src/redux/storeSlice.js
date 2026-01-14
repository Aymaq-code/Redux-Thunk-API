import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const productsFetch = createAsyncThunk(
  "products/fetch",

  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    return await res.json();
  }
);

const storeSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    seeMore: false,
    selectedCategory: "all",
    searchText: "",
  },
  reducers: {
    onSeeMore(state) {
      state.seeMore = !state.seeMore;
    },
    setCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setSearchText(state, action) {
      state.searchText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(productsFetch.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(productsFetch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { onSeeMore, setCategory, setSearchText } = storeSlice.actions;
export default storeSlice.reducer;
