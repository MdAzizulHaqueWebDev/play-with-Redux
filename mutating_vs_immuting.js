let state = {
	count: 0,
};

//* Mutating state (same reference) */
const prevState = state;
function increment() {
	// Mutating  state
	state.count = state.count + 1;
}
increment();
console.log(prevState === state); // true

// * Non-Mutated
const _prevState = state;
function _increment() {
	// Assigning a new state
	state = { count: state.count + 1 };
}
_increment();
console.log(state === prevState); // false
