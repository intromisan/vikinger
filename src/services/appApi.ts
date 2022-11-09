import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "./baseQuery";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery,
  tagTypes: ["Posts", "Comments"],
  endpoints: () => ({}),
});
