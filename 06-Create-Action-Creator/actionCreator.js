class Action {
	constructor(type, payload) {
		this.type = type;
		if (payload) {
			this.payload = payload;
		}
	}
}
export default Action;
