export class Point {
    x_coord;
    y_coord;

    velocity_x: number = 2;
    velocity_y: number = 2;

    boundary: Boundary;

    constructor(
        boundary: Boundary
    ) {
        this.boundary = boundary;
        this.x_coord = Math.floor(Math.random()*boundary.x_max) + boundary.x_min;
        this.y_coord = Math.floor(Math.random()*boundary.y_max) + boundary.y_min;
    }

    check_x_bounds() {
        if (this.x_coord > this.boundary.x_max - this.boundary.border_repulsion_range) {
            this.x_coord = this.x_coord - (2 * this.velocity_x);
            this.velocity_x *= -1;
        }

        if (this.x_coord < this.boundary.x_min + this.boundary.border_repulsion_range ) {
            this.x_coord = this.x_coord - (2 * this.velocity_x);
            this.velocity_x *= -1;
        }
    }

    check_y_bounds() {

        if (this.y_coord > this.boundary.y_max - this.boundary.border_repulsion_range ) {
            this.y_coord = this.y_coord - (2 * this.velocity_y);
            this.velocity_y *= -1;
        }

        if (this.y_coord < this.boundary.y_min + this.boundary.border_repulsion_range ) {
            this.y_coord = this.y_coord - (2 * this.velocity_y);
            this.velocity_y *= -1;
        }

    }
}

export class Boundary {
    x_min: number;
    x_max: number;
    y_min: number;
    y_max: number;
    border_repulsion_range = 15;
    constructor(
        x_min: number,
        x_max: number,
        y_min: number,
        y_max: number,
    ) {

        this.x_min = x_min;
        this.x_max = x_max;
        this.y_min = y_min;
        this.y_max = y_max;
    }

}