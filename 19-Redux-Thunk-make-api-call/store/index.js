import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import wishListReducer from "./slices/wishListSlice";
import { configureStore } from "@reduxjs/toolkit";
import { apiMiddleware } from "./middleware/API_Middleware";
import { thunkMiddleware } from "./middleware/thunkMiddleware";

export const store = configureStore({
	reducer: {
		products: productsReducer,
		cartItems: cartReducer,
		wishList: wishListReducer,
	},
	middleware: (getDefaults) => {
		console.log("redux default middlewares", getDefaults());
		return [...getDefaults(), thunkMiddleware];
	},
});

// thunk ki kore , video te 17:20s e bola hoyeche , thunk er jonno amar ekta function dispatch korte parbo redux toolkit e jekane amar sudu ekta plain object dispatch korte pari
