const variableList: string[] = []

export function variable(): string[] {
    return variableList
}

export function setVariable(key: string, value: any): void {

}

export function getValue(key: string): unknown {
    return key
}

//_________________________________
class Point {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y
    }

    #distanceTo(point: Point): number {
        const dx = this.x - point.x
        const dy = this.y - point.y
        return Math.sqrt(dx * dx + dy * dy);
    }

    static distance(p1: Point, p2: Point): number {
        return p1.#distanceTo(p2)
    }
}

const a = new Point(0, 0)
const b = new Point(1, 5)

const distance = Point.distance(a, b)
console.log(distance)

//_________________________
type Config = {
    instances: number
}

class Task {
    static #nextId = 0;
    static #maxInstances: number;
    #id: number

    static {
        fetch("http://localhost")
            .then((res) => res.json() as Promise<Config>)
            .then((result: Config) => {
                Task.#maxInstances = result.instances
            })
    }

    constructor() {
        if (Task.#nextId > Task.#maxInstances) {
            throw "Max number of tasks reached"
        }
        this.#id = Task.#nextId++
    }
}