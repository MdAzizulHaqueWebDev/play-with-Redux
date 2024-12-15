export const thunkMiddleware = (store) => (next) => (action) => {
	if (typeof action === "function") {
		next(action());
	} else next(action);
};
