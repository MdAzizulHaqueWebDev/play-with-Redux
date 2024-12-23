import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:3000",
	}),
	tagTypes: ["TASK"],
	endpoints: (builder) => {
		return {
			getTasks: builder.query({
				query: () => "/tasks",
				transformResponse: (res) => res.reverse("x"),
				providesTags: ["TASK"],
			}),
			addTask: builder.mutation({
				query: (task) => {
					return {
						url: "/tasks",
						method: "POST",
						body: task,
						headers: {
							"Content-type": "application/json",
						},
					};
				},
				invalidatesTags: ["TASK"],
				async onQueryStarted(updatedTask, { dispatch, queryFulfilled }) {
					// Optimistically update the cache
					const patchResult = dispatch(
					  api.util.updateQueryData('getTasks', undefined, (draft) => {
					draft.unshift(updatedTask) 
					})
					);
					try {
					  await queryFulfilled;
					} catch {
					  // Rollback the cache update on failure
					  patchResult.undo();
					}
				  },
			}),
			updateTask: builder.mutation({
				query: ({ id, ...updatedTask }) => ({
					url: `/tasks/${id}`,
					method: "PATCH",
					body: updatedTask,
				}),
				invalidatesTags: ["TASK"],
			}),
			deleteTask: builder.mutation({
				query: (id) => ({
					url: `tasks/${id}`,
					method: "DELETE",
				}),
				invalidatesTags: ["TASK"],
			}),
		};
	},
});

export const {
	useGetTasksQuery,
	useAddTaskMutation,
	useUpdateTaskMutation,
	useDeleteTaskMutation,
} = api;

console.log(api.util);