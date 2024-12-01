function createStore(reducer, ...options) {
	if (typeof reducer !== "function" || !reducer)
		throw new Error("Reducer function is required");

	let state;
	const listeners = [];
	const store = {
		getState() {
			return state;
		},
		dispatch(action) {
			state = reducer(state, action);
			listeners.forEach((listener) => {
				listener();
			});
		},
		subscribe(listener) {
			listeners.push(listener);
		},
	};
	store.dispatch({ type: "@@Initial" });
	return store;
}

export { createStore };
