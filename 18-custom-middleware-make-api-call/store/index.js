import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import wishListReducer from "./slices/wishListSlice";
import { configureStore } from "@reduxjs/toolkit";
import { apiMiddleware } from "./middleware/API_Middleware";

export const store = configureStore({
	reducer: {
		products: productsReducer,
		cartItems: cartReducer,
		wishList: wishListReducer,
	},
	middleware: (getDefaults) => [...getDefaults(), apiMiddleware],
});
