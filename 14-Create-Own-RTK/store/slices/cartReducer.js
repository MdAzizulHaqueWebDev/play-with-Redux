import { createSlice } from "@reduxjs/toolkit";
const findIndex = (state, action) =>
	state.findIndex((item) => item.productId === action.payload.productId);

const slice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		addItem(state, action) {
			const existItemIndx = findIndex(state, action);

			if (existItemIndx !== -1) {
				state[existItemIndx].quantity += 1;
			}
			state.push({ ...action.payload, quantity: 1 });
		},
		removeItem(state, action) {
			const existItemIndx = findIndex(state, action);
			state.splice(existItemIndx, 1);
		},
		increaseItemQuantity(state, action) {
			const existItemIndx = findIndex(state, action);
			state[existItemIndx].quantity += 1;
		},
		decreaseItemQuantity(state, action) {
			const existItemIndx = findIndex(state, action);
			state[existItemIndx].quantity -= 1;
			if (state[existItemIndx].quantity === 0) {
				state.splice(existItemIndx, 1);
			}
		},
	},
});
export const {
	addItem: addCartItem,
	decreaseItemQuantity: decreaseCartItemQuantity,
	increaseItemQuantity: increaseCartItemQuantity,
	removeItem,
} = slice.actions;

export default slice.reducer;

// Action Types
// export const CART_ADD_ITEM = "cart/addItem";
// const CART_REMOVE_ITEM = "cart/removeItem";
// const CART_ITEM_INCREASE_QUANTITY = "cart/increaseItemQuantity";
// const CART_ITEM_DECREASE_QUANTITY = "cart/decreaseItemQuantity";

// Action Creators
// export function addCartItem(product) {
// 	return { type: CART_ADD_ITEM, payload: product };
// }

// export function removeCartItem(productId) {
// 	return { type: CART_ADD_ITEM, payload: { productId } };
// }

// export function decreaseCartItemQuantity(productId) {
// 	return {
// 		type: CART_ITEM_DECREASE_QUANTITY,
// 		payload: { productId },
// 	};
// }

// export function increaseCartItemQuantity(productId) {
// 	return {
// 		type: CART_ITEM_INCREASE_QUANTITY,
// 		payload: { productId },
// 	};
// }
