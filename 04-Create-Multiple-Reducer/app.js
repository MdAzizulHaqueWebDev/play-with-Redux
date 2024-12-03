import { combineReducers, createStore } from "redux";
import { products } from "./products";

const intialState = {
	products: products,
	cartItems: [],
	wishlist: [4, 4, 2, 13],
};

// cart api
const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_INCREASE_ITEM = "cart/increaseItem";
const CART_DECREASE_ITEM = "cart/decreaseItem";
// products api
const PRODUCT_ADD_PRODUCT = "product/addProduct";
function reducer(state = intialState, { type, payload }) {
	console.log(type);
	switch (type) {
		case PRODUCT_ADD_PRODUCT:
			return { ...state, products: [...state.products, payload] };
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
		case CART_DECREASE_ITEM:
			return {
				...state,
				cartItems: state.cartItems
					.map((product) => {
						if (product.productId === payload.productId)
							return { ...product, quantity: product.quantity - 1 };
						return product;
					})
					.filter((product) => product.quantity > 0),
			};
		default:
			return state;
	}
}

const store = createStore(reducer, window?.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch({
	type: PRODUCT_ADD_PRODUCT,
	payload: {
		id: 21,
		title: "Mens C ",
		price: 15.9,
		description:
			"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
		category: "men's clothing",
		image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
		rating: {
			rate: 2.1,
			count: 430,
		},
	},
});
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
	type: CART_DECREASE_ITEM,
	payload: {
		productId: 5,
		quantity: 1,
	},
});
store.dispatch({
	type: CART_DECREASE_ITEM,
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
store.dispatch({
	type: CART_DECREASE_ITEM,
	payload: {
		productId: 2,
		quantity: 10,
	},
});

console.log(store.getState());
