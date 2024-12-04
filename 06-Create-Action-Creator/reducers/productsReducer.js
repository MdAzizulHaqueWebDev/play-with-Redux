// products api
export const PRODUCT_ADD_PRODUCT = "product/addProduct";
import { products } from "../products";

export default function productsReducer(state = products, { type, payload }) {
	switch (type) {
		case PRODUCT_ADD_PRODUCT:
			return [...state, payload];
		default:
			return state;
	}
}
