function createStore(reducer, ...options) {
	if (typeof reducer !== "function" || !reducer)
		throw new Error("Reducer function is required");

	let state;
	state = dispatch({ type: "@@INIT" });

	function dispatch(action) {
		state = reducer(state, action);
	}

	function getState() {
		return state;
	}

	return { dispatch, getState };
}

export { createStore };
