import { combineReducers, createStore } from "redux";
import { productsReducer } from "./reducers/productsReducer";
import { cartReducer } from "./reducers/cartReducer";
import { wishlistReducer } from "./reducers/wishlistReducer";

// const intialState = {
// 	products: products,
// 	cartItems: [],
// 	wishlist: [4, 4, 2, 13],
// };
// cart api
export const CART_ADD_ITEM = "cart/addItem";
export const CART_REMOVE_ITEM = "cart/removeItem";
export const CART_INCREASE_ITEM = "cart/increaseItem";
export const CART_DECREASE_ITEM = "cart/decreaseItem";
// products api
export const PRODUCT_ADD_PRODUCT = "product/addProduct";
const reducer = combineReducers({
	products: productsReducer,
	cartItems: cartReducer,
	wishlist: wishlistReducer,
});

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
