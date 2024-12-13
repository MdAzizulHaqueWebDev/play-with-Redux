import productsReducer from "./slices/productsReducer";
import cartReducer from "./slices/cartReducer";
import wishListReducer from "./slices/wishListReducer";
import { configureStore } from "@reduxjs/toolkit";
import { logger } from "./middleware/logger";

// const reducer = combineReducers({
// 	products: productsReducer,
// 	cartItems: cartReducer,
// 	wishList: wishListReducer,
// });

export const store = configureStore({
	reducer: {
		products: productsReducer,
		cartItems: cartReducer,
		wishList: wishListReducer,
	},
	middleware: (d) => {
		return d().concat(logger);
	},
});

// users[1].age = 20;
// const newUsers = users.map((user, indx) =>
// 	indx == 1 ? { ...user, age: 20 } : user,
// );
// console.log(newUsers);
// console.log(users);

// ----------- ekane kunu operation hoi eta sudu return kore
// console.log(users, "old users");
// produce(users, (draft) => {
// 	draft[1].age = 20;
// });
// console.log(users, "new users");

// const newUsers = produce(users, (draft) => {
// 	draft[1].age = 20;
// });
// console.log(users, "old users");
// console.log(newUsers, "new users");
