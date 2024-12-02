import { createStore } from "redux";
import { products } from "./products";

const intialState = {
	productList: products,
	cartItems: [],
	wishlist: [4, 4, 2, 13],
};

// cart api
const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_INCREASE_ITEM = "cart/increaseItem";
function reducer(state = intialState, { type, payload }) {
	console.log(type);
	switch (type) {
		case CART_ADD_ITEM:
			return { ...state, cartItems: [...state.cartItems, payload] };
		case CART_REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(item) => item.productId !== payload.productId,
				),
			};
		case CART_INCREASE_ITEM:
			const increaseItem = state.cartItems.map((product) => {
				if (product.productId === payload.productId) {
					return { ...product, quantity: product.quantity + 1 };
				}
				return product;
			});
			return {
				...state,
				cartItems: increaseItem,
			};
		default:
			return state;
	}
}

const store = createStore(reducer, window?.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch({
	type: CART_ADD_ITEM,
	payload: {
		productId: 2,
		quantity: 1,
	},
});
store.dispatch({
	type: CART_ADD_ITEM,
	payload: {
		productId: 5,
		quantity: 1,
	},
});
store.dispatch({
	type: CART_ADD_ITEM,
	payload: {
		productId: 14,
		quantity: 10,
	},
});

store.dispatch({
	type: CART_ADD_ITEM,
	payload: {
		productId: 5,
		quantity: 1,
	},
});

store.dispatch({
	type: CART_REMOVE_ITEM,
	payload: {
		productId: 14,
	},
});
store.dispatch({
	type: CART_INCREASE_ITEM,
	payload: {
		productId: 2,
		quantity: 10,
	},
});

console.log(store.getState());
