import {writable} from "svelte/store";
import {Point} from "./simulation";

class State {
    animation_on: boolean = false;
    points: State[] = [];

    constructor() {
    }
}

let simulation_state = () => {
    let state: State = new State();

    const {subscribe, set, update} = writable(state);

    const methods = {
        reset() {
            update( state => {

                //todo
                return state;
            })
        },

        load_state(loaded_state: State) {
            update( (state) => {
                    return loaded_state;
            })
        },



    }

    return {
        subscribe,
        set,
        state,
        ...methods
    }
}