export const apiMiddleware =
	({ dispatch }) =>
	(next) =>
	(action) => {
		const BASE_URL = "http://localhost:3000";

		if (action.type === "api/make-call") {
			next(action);
			const { path, onSuccess, onLoading, onError } = action.payload;
			dispatch({ type: onLoading });
			fetch(`${BASE_URL}${path}`)
				.then((res) => res.json())
				.then((data) => {
					next({
						type: onSuccess,
						payload: data,
					});
				})
				.catch((err) => {
					dispatch({
						type: onError,
						payload: err || "something went wrong",
					});
				});
		} else next(action);
	};
