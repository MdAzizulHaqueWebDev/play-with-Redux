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

const unsubcribe1 = counterState.subscribe(() => {
	console.log(counterState.getState());
});
const unsubcribe2 = counterState.subscribe(() => {
	console.log(counterState.getState(), "unsubscribe 2");
});
counterState.dispatch({ type: "count/increment" });
unsubcribe2();
counterState.dispatch({ type: "count/increment" });
