import {writable} from "svelte/store";
import {Boundary, BoundaryFactory, Point} from "./simulation";

class State {
    animation_on: boolean = false;
    points: Point[] = [];

    population: number = 10;
    r_value: number = 20;
    social_distancing_factor: number = 50;

    boundary_factory: BoundaryFactory = new BoundaryFactory();
    boundaries: Boundary[] = this.boundary_factory.scenario_1_boundaries();
    scenario: String = "default";
    canvas_width: number = 400;
    canvas_height: number = 400;

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
        },

        update_points() {
            update ((state) => {
                for (let point of state.points) {
                    point.x_coord += point.velocity_x;
                    point.y_coord += point.velocity_y;

                    point.check_x_bounds();
                    point.check_y_bounds();
                }
                return state;
            })
        },

        clear_points() {
            update((state) => {
                state.points = [];
                return state;
            })
        },

        add_point() {
            update((state) => {
                if (state.scenario === "default") {
                    state.points.push(new Point(state.boundaries[0]));
                }

                return state;
            })
        },

        create_points() {
            update((state) => {
                for (let i = 0; i < state.population; i++) {
                    this.add_point();
                }
                return state;
            })
        },

        get_points() {
            return state.points;
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