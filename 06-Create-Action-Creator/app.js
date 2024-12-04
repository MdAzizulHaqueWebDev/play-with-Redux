import { combineReducers, createStore } from "redux";
import productsReducer, {
	PRODUCT_ADD_PRODUCT,
} from "./reducers/productsReducer";
import cartReducer, {
	CART_ADD_ITEM,
	CART_DECREASE_ITEM,
	CART_INCREASE_ITEM,
	CART_REMOVE_ITEM,
	cartAddItem,
	cartRemoveItem,
} from "./reducers/cartReducer";
import wishlistReducer, { WISHLIST_ADD_ITEM } from "./reducers/wishlistReducer";

const reducer = combineReducers({
	products: productsReducer,
	cartItems: cartReducer,
	wishlist: wishlistReducer,
});

const store = createStore(reducer, window?.__REDUX_DEVTOOLS_EXTENSION__());
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: 1 });
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
store.dispatch(cartAddItem(2, 1));

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

store.dispatch(cartRemoveItem(2));
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
