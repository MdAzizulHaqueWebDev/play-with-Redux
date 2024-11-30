let state = {
	count: 0,
	name: "Azizul",
	age: 18,
};

// state.count = state.count + 1
// console.log(state);
// state.count = state.count + 1
// console.log(state);
const prevState = state;

function incrementCount() {
	state.count = state.count + 1;
}
incrementCount();
console.log(state);
// after increment
console.log(prevState === state); // true because this is references data type

function incrementCountImmuting() {
	state = { ...state, count: state.count + 1 };
}
incrementCountImmuting();
console.log(prevState === state); // false because this is references data type
