import { createStore } from "redux";
const renderCount = document.querySelector("#render-count");

const intitialState = {
	count: 0,
	name: "Azizul",
	age: 18,
};
const INCREMENT = "count/increment";
const INCREMENT_BY = "count/incrementBy";
const DECREMENT = '"count/decrement"';
const DECREMENT_BY = "count/decrementby";
function reducer(state = intitialState, action) {
	switch (action.type) {
		case INCREMENT:
			return { ...state, count: state.count + 1 };
		case INCREMENT_BY:
			return { ...state, count: state.count + action.payload };
		case DECREMENT:
			return { ...state, count: state.count - 1 };
		case DECREMENT_BY:
			return { ...state, count: state.count - action.payload };
		default:
			return state;
	}
}
// window.__REDUX_DEVTOOLS_EXTENSION__?.()
const reduxStore = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__?.(),
);

// reduxStore.dispatch({ type: "", payload: 10 });
// console.log(reduxStore);
renderCount.addEventListener("click", () => {
	reduxStore.dispatch({ type: DECREMENT_BY, payload: 2 });
});
const unsubcribe = reduxStore.subscribe(() => {
	renderCount.innerText = reduxStore.getState().count;
	console.log(reduxStore.getState());
});
// unsubcribe();
reduxStore.dispatch({ type: INCREMENT });
reduxStore.dispatch({ type: INCREMENT });
reduxStore.dispatch({ type: DECREMENT });
reduxStore.dispatch({ type: INCREMENT_BY, payload: 14 });
