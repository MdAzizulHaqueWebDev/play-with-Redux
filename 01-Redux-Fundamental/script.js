let state = {
	count: 0,
	name: "Azizul",
	age: 18,
};

// state.count = state.count + 1
// console.log(state);
// state.count = state.count + 1
// console.log(state);

function incrementCount() {
	state.count = state.count + 1;
}
incrementCount();
console.log(state);
