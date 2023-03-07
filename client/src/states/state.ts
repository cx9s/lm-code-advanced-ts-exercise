import { states, States } from "./states";

export class State {
	#state: States = "MENU";

	get(): States {
		return this.#state;
	}

	set(newState: States) {
		this.#state = newState;
	}
}
