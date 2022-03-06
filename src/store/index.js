import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./posts";

const rootReducer = combineReducers({
  posts: postsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
