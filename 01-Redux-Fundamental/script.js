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

// Immutable state change
function reducer(state) {
	return { ...state, count: state.count + 1 };
}

reduxState = reducer(reduxState);
console.log(reduxState);
