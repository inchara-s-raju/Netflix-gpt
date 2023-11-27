import { createSlice } from '@reduxjs/toolkit';

const gptSlice = createSlice({
  name: 'gpt',
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGPTSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    clearGptSuggestion: (state, action) => {
      state.movieNames = [];
      state.movieResults = [];
    },
  },
});
export const { toggleGPTSearchView, addGptMovieResult, clearGptSuggestion } =
  gptSlice.actions;
export default gptSlice.reducer;
