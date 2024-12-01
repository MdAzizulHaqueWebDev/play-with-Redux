import { createStore } from "redux";

const intitialState = {
	count: 0,
	name: "Azizul",
	age: 18,
};

function reducer(state = intitialState, action) {
	switch (action.type) {
		case "count/increment":
			return { ...state, count: state.count + 1 };
		case "count/incrementBy":
			return { ...state, count: state.count + action.payload };
		case "count/decrement":
			return { ...state, count: state.count - 1 };
		default:
			return state;
	}
}

const reduxStore = createStore(reducer);

// reduxStore.dispatch({ type: "", payload: 10 });
// console.log(reduxStore);

reduxStore.subscribe(() => {
	console.log(reduxStore.getState());
});
reduxStore.dispatch({ type: "count/increment" });
reduxStore.dispatch({ type: "count/increment" });
reduxStore.dispatch({ type: "count/decrement" });
reduxStore.dispatch({ type: "count/incrementBy", payload: 14 });
