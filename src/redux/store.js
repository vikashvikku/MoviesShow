import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
