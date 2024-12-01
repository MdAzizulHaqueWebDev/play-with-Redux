import { createStore } from "./redux.js";
const initialState = {
	count: 0,
};

const counterReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "count/increment":
			return { ...state, count: state.count + payload };

		default:
			return state;
	}
};

const counter = createStore(counterReducer);

counter.subscribe(() => {
	console.log(counter.getState());
});

// counter.dispatch({ type: "count/increment", payload: 10 });
