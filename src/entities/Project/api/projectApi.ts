import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Categorie, Project } from "../model";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.test.cyberia.studio/api/v1/",
  }),
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], void>({
      query: () => `projects`,
      transformResponse: (response: { items: Project[] }) => response.items,
      keepUnusedDataFor: 180,
    }),
    getCategories: builder.query<Categorie[], void>({
      query: () => "project-categories",
      transformResponse: (response: { items: Categorie[] }) => response.items,
      keepUnusedDataFor: 180,
    }),
  }),
});

export const { useGetProjectsQuery, useGetCategoriesQuery } = projectApi;
