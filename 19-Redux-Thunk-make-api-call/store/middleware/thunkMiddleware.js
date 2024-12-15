export const thunkMiddleware = (store) => (next) => (action) => {
	if (typeof action === "function") {
		next(action(store.dispatch));
	} else next(action);
};
