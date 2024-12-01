function createStore(reducer, ...options) {
	if (typeof reducer !== "function" || !reducer)
		throw new Error("Reducer function is required");

	let state;
	let listeners;
	const store = {
		getState() {
			return state;
		},
		dispatch(action) {
			// console.log(listeners);
			state = reducer(state, action);
			// listeners.forEach((listener) => {
			// 	listener();
			// });
			// listeners[0]?.();
			listeners && listeners();
		},
		subscribe(listener) {
			listeners = listener;
		},
	};
	store.dispatch({ type: "@@Initial" });
	return store;
}

export { createStore };
