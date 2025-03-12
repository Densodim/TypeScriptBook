type Point = {
    x: number;
    y: number;
}

class ShapeClass {
    points: Point[];
    fillStyle: string = 'white';
    lineWidth: number = 10;

    constructor(points: Point[]) {
        this.points = points;
    }

    set fill(style: string) {
        this.fillStyle = style;
    }

    set width(width: number) {
        this.lineWidth = width
    }

    render(ctx: CanvasRenderingContext2D) {
        if (this.points.length) {
            ctx.fillStyle = this.fillStyle;
            ctx.lineWidth = this.lineWidth;
            ctx.beginPath()
            let point = this.points[0];
            ctx.moveTo(point.x, point.y);
            for (let i = 1; i < this.points.length; i++) {
                point = this.points[i];
                ctx.lineTo(point.x, point.y);
            }
            ctx.closePath();
            ctx.stroke();
        }
    }
}

const canvas = document.getElementsByTagName('canvas')[0]
const ctx = canvas?.getContext('2d');

const shape = new ShapeClass([
    {x: 50, y: 50},
    {x: 150, y: 150},
    {x: 250, y: 250},
]);

shape.fill = 'red';
shape.width = 20;
if (ctx) {
    shape.render(ctx);
} else {
    console.error("Canvas context is not available.");
}

class RectangleClass extends ShapeClass {
    constructor(points: Point[]) {
        if (points.length !== 2) {
            throw new Error(`Canvas context is not available. got ${points.length}`);
        }
        super(points);
    }

    override render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.fillStyle;
        ctx.lineWidth = this.lineWidth;
        let a = this.points[0];
        let b = this.points[1];
        ctx.strokeRect(a.x, a.y, b.x - a.x, b.y - a.y)
    }
}

const rectangle = new RectangleClass([
    {x: 130, y: 190},
    {x: 170, y: 250},
])
if (ctx) {
    rectangle.render(ctx)
} else {
    console.error("Canvas context is not available.");
}

