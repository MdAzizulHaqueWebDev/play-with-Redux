function memoize(fn) {
	const cache = {};
	return function (arg) {
		if (cache[arg] !== undefined) return cache[arg];
		const result = fn(arg);
		cache[arg] = result;
		return result;
	};
}

const factorial = memoize((n) => (n === 0 ? 1 : n * factorial(n - 1)));
console.log(factorial(5)); // Output: 120
console.log(factorial(5)); // Cache hit
