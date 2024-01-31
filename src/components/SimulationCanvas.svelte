<script lang="ts">
    import {onMount} from "svelte";
    // import {Boundary, Point} from "../simulation/simulation";
    import simulation_state from "../simulation/simulation_store";

    let canvas: HTMLCanvasElement;
    let context: CanvasRenderingContext2D;
    // let points: Point[] = [];

    onMount(() => {
        //canvas setup
        context = canvas.getContext('2d')!;
        context.translate(0, simulation_state.state.canvas_height);
        context.scale(1,-1);
        context.save();
    })

    function clear_canvas() {
        // console.log("Clear Canvas");
        context.clearRect(0,0,simulation_state.state.canvas_width, simulation_state.state.canvas_height);
    }

    function start_animation() {
        window.requestAnimationFrame(() => draw_frame());
    }

    function draw_frame() {

        clear_canvas();
        // for (let point of points) {
        //     draw_circle(point.x_coord, point.y_coord, true)
        // }
        for (let point of simulation_state.state.points) {
        // for (let point of simulation_state.get_points()) {
            draw_circle(point.x_coord, point.y_coord, true);
        }

        simulation_state.update_points();
        // update_points();
        window.requestAnimationFrame(() => draw_frame());
    }

    // function update_points() {
    //
    //     for (let point of points) {
    //         point.x_coord += point.velocity_x;
    //         point.y_coord += point.velocity_y;
    //
    //         point.check_x_bounds();
    //         point.check_y_bounds();
    //     }
    // }

    function draw_circle(
        x_coord: number,
        y_coord:number,
        filled: boolean,
    ) {
        // console.log("Draw Circle");
        context.beginPath();
        // context.strokeStyle = '#ff0000';
        context.strokeStyle = 'rgba(255,0,0,0.5)';
        context.fillStyle = 'rgba(255,0,0,0.5)';

        context.arc(x_coord,y_coord,3, 0, 2 * Math.PI);

        if (filled) {
            context.fill();
        }

        context.stroke();
    }


</script>

<div>
    <canvas
            bind:this={canvas}
            width={simulation_state.state.canvas_width}
            height={simulation_state.state.canvas_height}
    />

    <button on:click={() => clear_canvas()}>
        clear_canvas
    </button>

    <button on:click={() => simulation_state.create_points()}>
        create points
    </button>
</div>

<button on:click={() => draw_frame()}>
    draw_frame
</button>

<button on:click={() => simulation_state.clear_points()}>
    clear_points
</button>

<style>

    canvas {
        border: 1px solid red;

    }
</style>