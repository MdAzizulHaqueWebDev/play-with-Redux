import { createContext, useContext, useState } from "react";

// import { createContext, useContext, useEffect, useState } from "react";
// const ReduxContext = createContext(null);

// export const Provider = ({ children, store }) => {
// 	const [state, setState] = useState(store.getState());

// 	useEffect(() => {
// 		store.subscribe(() => {
// 			setState(store.getState());
// 		});
// 	}, []);
// 	return (
// 		<ReduxContext.Provider value={{ state, dispatch: store.dispatch }}>
// 			{children}
// 		</ReduxContext.Provider>
// 	);
// };

// export function useDispatch() {
// 	return useContext(ReduxContext).dispatch;
// }
// export function useSelector(selector) {
// 	console.log(useContext(ReduxContext));
// 	const { state } = useContext(ReduxContext);
// 	return selector(state);
// }

const ReduxContext = createContext(null);
export const Provider = ({ reduxStore, children }) => {
	const [state, setState] = useState(reduxStore.getState());

	reduxStore.subscribe(() => {
		setState(reduxStore.getState());
	});
	return (
		<ReduxContext.Provider
			value={{ state: state, dispatch: reduxStore.dispatch }}
		>
			{children}
		</ReduxContext.Provider>
	);
};

export function useSelector(selector) {
	return selector(useContext(ReduxContext).state);
}

export function useDispatch() {
	return useContext(ReduxContext).dispatch;
}
