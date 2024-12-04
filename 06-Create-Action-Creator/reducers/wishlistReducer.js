// wishlist api
export const WISHLIST_ADD_ITEM = "wishlist/addItem";

export default function wishlistReducer(state = [], { type, payload }) {
	switch (type) {
		case WISHLIST_ADD_ITEM:
			return [...state, payload];
		default:
			return state;
	}
}
