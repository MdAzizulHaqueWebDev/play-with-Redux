import { combineReducers, createStore } from "redux";
import productsReducer from "./productsReducer";
import cartReducer, {
	addCartItem,
	decreaseCartItemQuantity,
	increaseCartItemQuantity,
} from "./cartReducer";
import wishListReducer, {
	addWishListItem,
	removeWishListItem,
} from "../wishListReducer";

const reducer = combineReducers({
	products: productsReducer,
	cartItems: cartReducer,
	wishList: wishListReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
const { dispatch } = store;
dispatch(addCartItem(1));
dispatch(addCartItem(12));

dispatch(increaseCartItemQuantity(12));

dispatch(decreaseCartItemQuantity(12));
dispatch(decreaseCartItemQuantity(12));

dispatch(addWishListItem(18));
dispatch(addWishListItem(11));

dispatch(removeWishListItem(11));
dispatch(removeWishListItem(18));
