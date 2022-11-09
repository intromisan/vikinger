import { configureStore } from "@reduxjs/toolkit";
import { appApi } from "../services/appApi";
import todoReducer from "./slices/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    [appApi.reducerPath]: appApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
