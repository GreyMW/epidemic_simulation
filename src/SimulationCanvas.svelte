<script lang="ts">
    import {onMount} from "svelte";
    import {Boundary, Point} from "./simulation/simulation";

    export let width = 400;
    export let height = 400;

    let canvas: HTMLCanvasElement;
    let context: CanvasRenderingContext2D;
    let points: Point[] = [];

    let test = {
        add_to: 0,
        subtract_from: 0,
        constant: Math.random()
    }

    onMount(() => {

        //canvas setup
        context = canvas.getContext('2d')!;
        context.translate(0, height);
        context.scale(1,-1);
        context.save();
        // start_animation();
    })

    function clear_canvas() {
        // console.log("Clear Canvas");
        context.clearRect(0,0,width, height);
    }

    function start_animation() {
        window.requestAnimationFrame(() => draw_frame());
    }

    function draw_frame() {

        clear_canvas();

        for (let point of points) {
            draw_circle(point.x_coord, point.y_coord, true)
        }

        update_points();
        window.requestAnimationFrame(() => draw_frame());
    }

    function update_points() {

        for (let point of points) {
            point.x_coord += point.velocity_x;
            point.y_coord += point.velocity_y;

            point.check_x_bounds();
            point.check_y_bounds();
        }
    }

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


    function add_point(width: number, height: number) {
        let boundary = new Boundary(0, width, 0, height);
        // points.push(new Point(0, width, 0, height));
        points.push(new Point(boundary));
    }

    function create_points(num_of_points: number) {
        for (let i = 0; i < num_of_points; i++) {
            add_point(width, height);
        }
    }

    function clear_points() {
        points = [];
    }

</script>

<div>
    <canvas

            bind:this={canvas}
            width={width}
            height={height}
    />

    <button on:click={() => clear_canvas()}>
        clear_canvas
    </button>

    <button on:click={() => create_points(1)}>
        create 10 points
    </button>
</div>


<button on:click={() => draw_frame()}>
    draw_frame
</button>

<button on:click={() => clear_points()}>
    clear_points
</button>

<style>

    canvas {
        border: 1px solid red;

    }
</style>