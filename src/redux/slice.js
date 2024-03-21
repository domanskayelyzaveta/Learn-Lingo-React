import { createSlice } from "@reduxjs/toolkit";
import { getTeachersThunk } from "./thunks";

const initialState = {
  favorites: [],
  teachersData: [],
  isLoading: false,
  error: null,
  hasMorePages: true,
  filter: { price: 0, language: "", level: "" },
};

const teacherSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item._id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTeachersThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTeachersThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.teachersData = action.payload;
      })
      .addCase(getTeachersThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload.toString() : null;
      });
  },
});

export const teacherReducer = teacherSlice.reducer;
export const { setFavorites, removeFromFavorites } = teacherSlice.actions;
