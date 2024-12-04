import {
	CART_ADD_ITEM,
	CART_DECREASE_ITEM,
	CART_INCREASE_ITEM,
	CART_REMOVE_ITEM,
} from "../app";

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
