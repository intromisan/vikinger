import { appApi } from "./appApi";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

//Hello Reaper

export const postsApi = appApi.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
      query: () => "/posts",
      providesTags: ["Posts"],
    }),
    getPostById: build.query<Post, number>({
      query: (id) => `/posts/${id}`,
    }),
    addPost: build.mutation<void, Partial<Post>>({
      query: (body) => {
        return {
          url: "/posts",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Posts"],
    }),
    deletePost: build.mutation<void, number>({
      query: (id) => {
        return {
          url: `/posts/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});
