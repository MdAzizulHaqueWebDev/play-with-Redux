const createStore = (reducer) => {
	let state;
	const listeners = [];
	const store = {
		getState() {
			return state;
		},
		dispatch(action) {
			state = reducer(state, action);
			listeners.forEach((listener) => listener());
		},
		subscribe(listener) {
			listeners.length ? listeners.push(listener) : listener();
			return () => {
				const listenerInx = listeners.findIndex((lisnr) => lisnr === listener);
				listeners.splice(listenerInx, 1);
			};
		},
	};
	store.dispatch({});
	return store;
};

export { createStore };
