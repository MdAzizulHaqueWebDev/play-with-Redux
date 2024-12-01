import { createStore } from "./redux.js";

const intitialState = {
	count: 0,
};
function counterReducer(state = intitialState, action) {
	if (action?.type === "count/increment") {
		return { ...state, count: state.count + 1 };
	}
	return { ...state };
}
const counterState = createStore(counterReducer);

console.log(counterState);

counterState.subscribe(() => {
	console.log(counterState.getState());
});

counterState.dispatch({ type: "count/increment" });
counterState.dispatch({ type: "count/increment" });
