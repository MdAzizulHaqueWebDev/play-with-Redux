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
			console.log(listeners);
			state = reducer(state, action);
			listeners.forEach((listener) => {
				listener();
			});
			// listeners[0]?.();
			// listeners && listeners();
		},
		subscribe(listener) {
			// listeners = listener;
			listeners.push(listener);
			return () => {
				const listenerIndex = listeners.findIndex(
					(lisnr) => lisnr === listener,
				);
				listeners.splice(listenerIndex, 1);
			};
		},
	};
	store.dispatch({ type: "@@Initial" });
	return store;
}

export { createStore };
