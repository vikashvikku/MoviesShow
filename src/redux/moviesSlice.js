import { createSlice } from "@reduxjs/toolkit";
import { recommended, trending } from "../api/moviesData";

const initialState = {
  moviesList: [],
  trendingList: trending,
  bookmarksList: [],
  recommendedList: recommended,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    loadTrendingList(state, { payload }) {
      state.trendingList = payload;
    },
    loadRecommendedList(state, { payload }) {
      state.recommendedList = payload;
    },
    updateTrendingBookmark(state, { payload }) {
      state.trendingList = state.trendingList.map((movie) => {
        if (movie.id === payload) {
          movie.bookmarked = !movie.bookmarked;
        }

        return movie;
      });
    },
    updateRecommendedBookmark(state, { payload }) {
      state.recommendedList = state.recommendedList.map((movie) => {
        if (movie.id === payload) {
          movie.bookmarked = !movie.bookmarked;
        }

        return movie;
      });
    },
    toggleBookmark(state, { payload }) {
      if (state.bookmarksList.some((movie) => movie.id === payload.id)) {
        state.bookmarksList = state.bookmarksList.filter(
          (movie) => movie.id !== payload.id
        );
      } else {
        state.bookmarksList = [...state.bookmarksList, payload];
      }
    },
  },
});

export const {
  loadTrendingList,
  loadRecommendedList,
  updateTrendingBookmark,
  updateRecommendedBookmark,
  toggleBookmark,
} = moviesSlice.actions;
export default moviesSlice.reducer;
