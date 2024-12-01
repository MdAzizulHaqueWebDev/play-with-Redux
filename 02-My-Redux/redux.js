function createStore(reducer, ...options) {
	if (typeof reducer !== "function" || !reducer)
		throw new Error("Reducer function is required");

	function dispatch(action) {}
	function getState() {}
	return { dispatch, getState };
}

export { createStore };
