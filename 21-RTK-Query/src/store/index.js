import { configureStore, createSlice } from "@reduxjs/toolkit";
import { aliasapi } from "../RTK_Queries/apiSlice";

export const store = configureStore({
	reducer: {
		[aliasapi.reducerPath]: aliasapi.reducer,
	},
	middleware: (dftMw) => [...dftMw(), aliasapi.middleware],
});
// const taskSlice = createSlice({
// 	name: "tasks",
// 	initialState: [],
// 	reducers: {
// 		getTask(state , action) {
// 			return state
// 		},
// 	},
// });

// store.dispatch({type:'tasks/getTask'})
 