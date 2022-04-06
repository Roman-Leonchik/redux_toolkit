import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPost } from "../models/IPost";

export const postAPI = createApi({
    reducerPath: "postAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
    tagTypes: ["Post"],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], void>({
            query: () => ({
                url: "/posts",
            }),
            providesTags: result => ["Post"]
        }),
        fetchPagePosts: build.query<IPost[], number>({
            query: (page: number) => ({
                url: `/posts?_page=${page}&_limit=3`,
            }),
            providesTags: result => ["Post"]
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: "/posts",
                method: "POST",
                body: post
            }),
            invalidatesTags: ["Post"]
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: "PUT",
                body: post
            }),
            invalidatesTags: ["Post"]
        }),
        deletePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: "DELETE",
                body: post
            }),
            invalidatesTags: ["Post"]
        })
    })
})