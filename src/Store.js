import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts/Postsslice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;
