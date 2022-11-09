import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const baseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:5000",
//   prepareHeaders: async (headers) => {
//     const accessToken = sessionStorage.getItem("accessToken");
//     const refreshToken = localStorage.getItem("refreshToken");

//     if (accessToken) {
//       headers.set("authorization", `Bearer ${accessToken}`);
//     }

//     if (refreshToken) {
//       headers.set("x-refresh", refreshToken);
//     }

//     return headers;
//   },
// });

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://jsonplaceholder.typicode.com",
});
