import {
	createSelector,
	createSlice,
	createAsyncThunk,
} from "@reduxjs/toolkit";

export const fetchCartsThunk = createAsyncThunk("cart/fetchCarts", async () => {
	try {
		return await (await fetch("http://localhost:3000/carts/5")).json();
	} catch (err) {
		throw err;
	}
});

const findItemIndex = (state, action) =>
	state.findIndex(
		(cartItem) => cartItem.productId === action.payload.productId,
	);

const slice = createSlice({
	name: "cart",
	initialState: {
		loading: false,
		list: [],
		error: "",
	},
	reducers: {
		// fetchCartItems(state) {
		// 	state.loading = true;
		// },
		// fetchCartItemsError(state, action) {
		// 	state.loading = false;
		// 	state.error = action.payload || "Something went wrong!";
		// },
		// loadCartItems(state, action) {
		// 	state.loading = false;
		// 	state.list = action.payload.products;
		// },
		addCartItem(state, action) {
			const existingItemIndex = findItemIndex(state.list, action);
			if (existingItemIndex !== -1) state.list[existingItemIndex].quantity += 1;
			else state.list.push({ ...action.payload, quantity: 1 });
		},
		removeCartItem(state, action) {
			const existingItemIndex = findItemIndex(state.list, action);
			state.list.splice(existingItemIndex, 1);
		},
		increaseCartItemQuantity(state, action) {
			const existingItemIndex = findItemIndex(state.list, action);
			state.list[existingItemIndex].quantity += 1;
		},
		decreaseCartItemQuantity(state, action) {
			const existingItemIndex = findItemIndex(state.list, action);
			state.list[existingItemIndex].quantity -= 1;
			if (state.list[existingItemIndex].quantity === 0)
				state.list.splice(existingItemIndex, 1);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCartsThunk.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(fetchCartsThunk.fulfilled, (state, action) => {
				state.loading = false;
				state.list = action.payload.products;
			})
			.addCase(fetchCartsThunk.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload || "something went wrong";
			});
	},
});

const selectorFn = ({ products, cartItems }) => {
	return cartItems.list
		.map(({ productId, quantity }) => {
			const cartProduct = products.list.find(
				(product) => product.id === productId,
			);
			return { ...cartProduct, quantity };
		})
		.filter(({ title }) => title);
};
export const getCartItems = createSelector(selectorFn, (state) => state);

export const {
	addCartItem,
	removeCartItem,
	increaseCartItemQuantity,
	decreaseCartItemQuantity,
} = slice.actions;

// Thunk Action Creator
// const { fetchCartItemsError, fetchCartItems, loadCartItems } = slice.actions;
// export const fetchCarts = () => (dispatch) => {
// 	dispatch(fetchCartItems());
// 	fetch("http://localhost:3000/carts/5")
// 		.then((res) => res.json())
// 		.then((data) => {
// 			dispatch(loadCartItems(data));
// 		})
// 		.catch((er) => {
// 			fetchCartItemsError(er.message || "something went wrong");
// 		});
// };

export default slice.reducer;
