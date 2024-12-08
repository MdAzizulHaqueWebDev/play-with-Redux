import { produce } from "immer";

// Action Types
export const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_ITEM_INCREASE_QUANTITY = "cart/increaseItemQuantity";
const CART_ITEM_DECREASE_QUANTITY = "cart/decreaseItemQuantity";

// Action Creators
export function addCartItem(product) {
	return { type: CART_ADD_ITEM, payload: product };
}

export function removeCartItem(productId) {
	return { type: CART_ADD_ITEM, payload: { productId } };
}

export function decreaseCartItemQuantity(productId) {
	return {
		type: CART_ITEM_DECREASE_QUANTITY,
		payload: { productId },
	};
}

export function increaseCartItemQuantity(productId) {
	return {
		type: CART_ITEM_INCREASE_QUANTITY,
		payload: { productId },
	};
}

// Reducer
export default function cartReducer(baseState = [], action) {
	return produce(baseState, (state) => {
		const existItemIndx = state.findIndex(
			(item) => item.productId === action.payload.productId,
		);
		switch (action.type) {
			case CART_ADD_ITEM:
				if (existItemIndx !== -1) {
					state[existItemIndx].quantity += 1;
					break;
				}
				state.push({ ...action.payload, quantity: 1 });
				break;
			case CART_REMOVE_ITEM:
				state.splice(existItemIndx, 1);
				break;
			case CART_ITEM_INCREASE_QUANTITY:
				state[existItemIndx].quantity += 1;
				break;
			case CART_ITEM_DECREASE_QUANTITY:
				state[existItemIndx].quantity -= 1;
				if (state[existItemIndx].quantity === 0) {
					state.splice(existItemIndx, 1);
				}

				break;
		}
		return state;
	});
}
