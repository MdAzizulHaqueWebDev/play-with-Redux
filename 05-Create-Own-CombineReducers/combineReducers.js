export default function combineReducers(reducers) {
	const reducersKeys = Object.keys(reducers);

	return function (state = {}, action) {
		const states = {};
		for (let i = 0; i < reducersKeys.length; i++) {
			const singleKey = reducersKeys[i];
			const singleReducer = reducers[singleKey];
			const previousState = state[singleKey];
			const nextState = singleReducer(previousState, action);
			states[singleKey] = nextState;
		}
		return states;
	};
}
