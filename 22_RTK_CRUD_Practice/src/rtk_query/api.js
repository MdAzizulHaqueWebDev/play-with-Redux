import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQueryWithDebug = async (args, api, extraOptions) => {
	console.log("HTTP Request Args:", args);
	const result = await fetchBaseQuery({ baseUrl: "http://localhost:3000" })(
		args,
		api,
		extraOptions,
	);
	console.log("HTTP Response Result:", result);
	return result;
};

export const api = createApi({
	reducerPath: "todos-api",
	baseQuery: baseQueryWithDebug,
	tagTypes: ["TASK"],
	endpoints: (builder) => {
		return {
			getTasks: builder.query({
				query: () => "/tasks",
				providesTags: ["TASK"],
			}),
			addTask: builder.mutation({
				query: (newTask) => ({
					url: "/tasks",
					method: "POST",
					body: newTask,
				}),
				invalidatesTags: ["TASK"],
			}),
			updateTask: builder.mutation({
				query: (updatedTask) => {
					return {
						url: `/tasks/${updatedTask.id}`,
						method: "PATCH",
						body: updatedTask,
					};
				},
				invalidatesTags: ["TASK"],
			}),
			deleteTask: builder.mutation({
				query: (id) => ({
					url: "/tasks/" + id,
					method: "DELETE",
				}),
				invalidatesTags:['TASK']
			}),
		};
	},
});

export const { useGetTasksQuery, useAddTaskMutation, useUpdateTaskMutation ,useDeleteTaskMutation} =
	api;
