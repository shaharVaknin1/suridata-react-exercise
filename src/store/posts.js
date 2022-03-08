import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllPosts, translateText } from "./networking";

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  const response = await fetchAllPosts();
  return response.data;
});

export const translateAllPosts = createAsyncThunk(
  "posts/translate",
  async ({ posts, currentLanguage, languageTranslateTo }) => {
    const requestBody = posts.map(({ body }) => ({ text: body }));
    const { data } = await translateText(
      currentLanguage.value,
      languageTranslateTo.value,
      requestBody
    );
    const translatedPosts = posts.map((post, index) => ({
      ...post,
      body: data[index].translations[0].text,
    }));

    return { allPosts: translatedPosts, currentLanguage: languageTranslateTo };
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    allPosts: [],
    currentLanguage: { label: "English", value: "EN" },
  },
  reducers: {
    updatePosts: (_stare, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => ({
      ...state,
      currentLanguage: { label: "English", value: "EN" },
      allPosts: action.payload,
    }));
    builder.addCase(
      translateAllPosts.fulfilled,
      (state, action) => action.payload
    );
  },
});

export const selectPosts = (state) => state.posts.allPosts;
export const selectCurrentLanguage = (state) => state.posts.currentLanguage;
