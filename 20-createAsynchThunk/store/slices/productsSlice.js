import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchAllProducts = createAsyncThunk(
	"product/fetchProducts",
	async () => {
		try {
			return await (await fetch("http://localhost:3000/products")).json();
		} catch (err) {
			throw er;
		}
	},
);
const slice = createSlice({
	name: "product",
	initialState: {
		loading: false,
		list: [],
		error: "",
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllProducts.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchAllProducts.fulfilled, (state, action) => {
				state.loading = false;
				console.log(action.payload);
				state.list = action.payload;
			})
			.addCase(fetchAllProducts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload || "something went wrong";
			});
	},
});

export const { updateAllProducts, fetchProducts, fetchProductsError } =
	slice.actions;
// Thunk Action Creator
// export const fetchAllProducts = () => (dispatchs) => {
// 	dispatchs(fetchProducts());
// 	fetch("http://localhost:3000/products")
// 		.then((res) => res.json())
// 		.then((data) => {
// 			dispatchs(updateAllProducts(data));
// 		})
// 		.catch((er) => {
// 			fetchProductsError(er.message || "something went wrong");
// 		});
// };
export default slice.reducer;
