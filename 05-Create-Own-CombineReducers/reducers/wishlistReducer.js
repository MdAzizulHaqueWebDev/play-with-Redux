import { WISHLIST_ADD_ITEM } from "../app";

export default function wishlistReducer(state = [], { type, payload }) {
	switch (type) {
		case WISHLIST_ADD_ITEM:
			return [...state, payload];
		default:
			return state;
	}
}
