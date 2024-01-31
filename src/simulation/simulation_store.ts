import {writable} from "svelte/store";
import {Point} from "./simulation";

class State {
    animation_on: boolean = false;
    points: State[] = [];
    population: number = 10;

    constructor() {
    }
}

let simulation_state = () => {
    let state: State = new State();

    //svelte store methods
    const {subscribe, set, update} = writable(state);

    //state methods
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

        set_population(population: number) {
            update((state) => {
                state.population = population;
                return state;
            })
        }



    }

    return {
        subscribe,
        set,
        state,
        ...methods
    }
}

export default simulation_state();