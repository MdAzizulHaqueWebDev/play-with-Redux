import { createStore } from "redux";
import { products } from "./products";

const intialState = {
	productsList: products,
	cartItems: [
		{ productId: 2, quantity: 5 },
		{ productId: 6, quantity: 2 },
	],
	wishlist: [4, 4, 2, 13],
};
function reducer(state = intialState, action) {
	return { ...state };
}
const store = createStore(reducer);

console.log(store.getState());
