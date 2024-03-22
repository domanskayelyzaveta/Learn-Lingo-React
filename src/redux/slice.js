import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  registerThunk,
  getTeachersThunk,
  logOutThunk,
  signInThunk,
} from "./thunks";

const initialState = {
  favorites: [],
  teachersData: [],
  isLoading: false,
  error: null,
  hasMorePages: true,
  modalContent: null,
  openModal: false,
  token: [],
  isSignedIn: false,
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
    setModalStatus: (state, action) => {
      state.openModal = action.payload;
    },
    setModalContent: (state, action) => {
      state.modalContent = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //=======signUp=========================//
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
      })
      //=======signIn=========================//
      .addCase(signInThunk.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
      })
      //=======LogOut=========================//;
      .addCase(logOutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(logOutThunk.rejected, (state) => {
        state.isSignedIn = false;
      })
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
      })
      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          signInThunk.pending,
          logOutThunk.pending
        ),
        (state) => {
          state.error = null;
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.fulfilled,
          signInThunk.fulfilled,
          logOutThunk.fulfilled
        ),
        (state) => {
          state.error = null;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          signInThunk.rejected,
          logOutThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const teacherReducer = teacherSlice.reducer;
export const {
  setFavorites,
  removeFromFavorites,
  setModalStatus,
  setModalContent,
} = teacherSlice.actions;
