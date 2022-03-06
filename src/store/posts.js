import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchAllPosts } from "./networking";

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  const response = await fetchAllPosts();
  return response.data;
});

export const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    updatePosts: (stare, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => action.payload);
  },
});

export const selectPosts = (state) => {
  return state.posts;
};
