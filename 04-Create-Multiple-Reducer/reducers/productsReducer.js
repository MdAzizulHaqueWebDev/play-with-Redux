import { PRODUCT_ADD_PRODUCT } from "../app";
import { products } from "../products";

export function productsReducer(state = products, { type, payload }) {
	switch (type) {
		case PRODUCT_ADD_PRODUCT:
			return { ...state, products: [...state.products, payload] };
		default:
			return state;
	}
}
