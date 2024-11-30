let state = {
	count: 0,
	name: "Azizul",
	age: 18,
};

const prevState = state;

function incrementCountImmuting() {
	state = { ...state, count: state.count + 1 };
}
incrementCountImmuting();
console.log(state);
console.log(prevState === state); // false because this is references data type

//**  Redux Way */
let reduxState = {
	count: 0,
	name: "Azizul",
	age: 18,
};

// static  state change
// function reducer(state) {
// 	return { ...state, count: state.count + 1 };
// }

// reduxState = reducer(reduxState);
// console.log(reduxState);

// dynamically state change by action
function reducer(state, action) {
	if (!action?.type) throw new Error("Action type expected");
	if (action.type === "count/increment") {
		return { ...state, count: state.count + 1 };
	} else if (action.type === "count/incrementBy") {
		return { ...state, count: state.count + action.payload };
	} else if (action.type === "count/decrement") {
		return { ...state, count: state.count - 1 };
	}
	return state;
}

reduxState = reducer(reduxState, { type: "count/increment" });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "count/increment" });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "count/decrement" });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "count/incrementBy", payload: 14 });
console.log(reduxState);
