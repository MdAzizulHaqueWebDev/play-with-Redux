import { createStore } from "redux";

const intitialState = {
	count: 0,
	name: "Azizul",
	age: 18,
};

function reducer(state = intitialState, action) {
	console.log(action);
	switch (action) {
		case action.type === "count/increment":
			return { ...state, count: state.count + 1 };
		case action.type === "count/incrementBy":
			return { ...state, count: state.count + action.payload };
		case action.type === "count/decrement":
			return { ...state, count: state.count - 1 };
		default:
			return state;
	}
}

const reduxStore = createStore(reducer);

// reduxStore.dispatch({ type: "", payload: 10 });
// console.log(reduxStore);

reduxStore.dispatch({ type: "count/increment" });
console.log(reduxStore.getState());
reduxStore.dispatch({ type: "count/increment" });
console.log(reduxStore.getState());

reduxStore.dispatch({ type: "count/decrement" });
console.log(reduxStore.getState());
reduxStore.dispatch({ type: "count/incrementBy", payload: 14 });
console.log(reduxStore.getState());
