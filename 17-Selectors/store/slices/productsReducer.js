import { productsList } from "../productsList";

export default function productsReducer(state = productsList) {
	return state;
}

export const selectProductsList = (state) => state.products;
