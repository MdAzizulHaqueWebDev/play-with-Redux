import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "product",
	initialState: {
		loading: false,
		list: [],
		error: "",
	},
	reducers: {
		fetchProducts(state) {
			state.loading = true;
		},
		fetchProductsError(state, action) {
			state.loading = false;
			state.error = action.payload || "Something went wrong!";
		},
		updateAllProducts(state, action) {
			state.loading = false;
			state.list = action.payload;
			state.error = "";
		},
	},
});

export const { updateAllProducts, fetchProducts, fetchProductsError } =
	slice.actions;
export const fetchAllProducts = () => (dispatchs) => {
	dispatchs(fetchProducts());
	fetch("http://localhost:3000/products")
		.then((res) => res.json())
		.then((data) => {
			dispatchs(updateAllProducts(data));
		})
		.catch((er) => {
			fetchProductsError(er.message || "something went wrong");
		});
};
export default slice.reducer;
