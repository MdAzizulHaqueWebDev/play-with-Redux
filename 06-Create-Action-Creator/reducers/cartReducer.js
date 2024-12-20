// action types / cart api
export const CART_ADD_ITEM = "cart/addItem";
export const CART_REMOVE_ITEM = "cart/removeItem";
export const CART_INCREASE_ITEM = "cart/increaseItem";
export const CART_DECREASE_ITEM = "cart/decreaseItem";

// Action Creator
export function cartAddItem(productId, productQuantity) {
	return {
		type: CART_ADD_ITEM,
		payload: {
			productId,
			productQuantity,
		},
	};
}
export function cartRemoveItem(productId) {
	return {
		type: CART_REMOVE_ITEM,
		payload: {
			productId,
		},
	};
}
export default function cartReducer(state = [], { type, payload }) {
	switch (type) {
		case CART_ADD_ITEM:
			return [...state, payload];

		case CART_REMOVE_ITEM:
			return state.filter((item) => item.productId !== payload.productId);

		case CART_INCREASE_ITEM:
			const increaseItem = state.map((product) => {
				if (product.productId === payload.productId) {
					return { ...product, quantity: product.quantity + 1 };
				}
				return product;
			});
			return increaseItem;

		case CART_DECREASE_ITEM:
			return state
				.map((product) => {
					if (product.productId === payload.productId)
						return { ...product, quantity: product.quantity - 1 };
					return product;
				})
				.filter((product) => product.quantity > 0);

		default:
			return state;
	}
}
