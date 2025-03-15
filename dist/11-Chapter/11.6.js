const variableList = [];
export function variable() {
    return variableList;
}
export function setVariable(key, value) {
}
export function getValue(key) {
    return key;
}
//_________________________________
class Point {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    #distanceTo(point) {
        const dx = this.x - point.x;
        const dy = this.y - point.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    static distance(p1, p2) {
        return p1.#distanceTo(p2);
    }
}
const a = new Point(0, 0);
const b = new Point(1, 5);
const distance = Point.distance(a, b);
console.log(distance);
class Task {
    static #nextId = 0;
    static #maxInstances;
    #id;
    static {
        fetch("http://localhost")
            .then((res) => res.json())
            .then((result) => {
            Task.#maxInstances = result.instances;
        });
    }
    constructor() {
        if (Task.#nextId > Task.#maxInstances) {
            throw "Max number of tasks reached";
        }
        this.#id = Task.#nextId++;
    }
}
