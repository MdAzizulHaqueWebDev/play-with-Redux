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
export default function cartReducer(state = [], action) {
	switch (action.type) {
		case CART_ADD_ITEM:
			const isExistItem = state.find(
				(item) => item.productId === action.payload.productId,
			);
			if (isExistItem) {
				return state.map((item) => {
					return item.productId === isExistItem.productId
						? { ...item, quantity: item.quantity + 1 }
						: item;
				});
			}
			return [...state, { ...action.payload, quantity: 1 }];
		case CART_REMOVE_ITEM:
			return state.filter(
				(cartItem) => cartItem.productId !== action.payload.productId,
			);
		case CART_ITEM_INCREASE_QUANTITY:
			return state.map((cartItem) => {
				if (cartItem.productId === action.payload.productId) {
					return { ...cartItem, quantity: cartItem.quantity + 1 };
				}
				return cartItem;
			});

		case CART_ITEM_DECREASE_QUANTITY:
			return state
				.map((cartItem) => {
					if (cartItem.productId === action.payload.productId) {
						return { ...cartItem, quantity: cartItem.quantity - 1 };
					}
					return cartItem;
				})
				.filter((cartItem) => cartItem.quantity > 0);
		default:
			return state;
	}
}
