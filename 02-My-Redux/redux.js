function createStore(reducer, ...options) {
	if (typeof reducer !== "function" || !reducer)
		throw new Error("Reducer function is required");

	let state;
	const store = {
		getState() {
			return state;
		},
		dispatch(action) {
			state = reducer(state, action);
		},
	};
	state = store.dispatch({ type: "@@Initial" });
	return store;
}

export { createStore };
