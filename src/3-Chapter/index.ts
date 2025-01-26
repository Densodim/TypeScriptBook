// 3.3

type Circle = {
    radius: number;
    kind: "circle";
}
type Square = {
    x: number;
    kind: "square";
}
type Triangle = {
    x: number;
    y: number;
    kind: "triangle";
}
type Rectangle = {
    x: number;
    y: number;
    kind: "rectangle";
}
type Shape = Circle | Square | Triangle | Rectangle;

function area(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius
        case "square":
            return shape.x * shape.x
        case "triangle":
            return (shape.y * shape.y) / 2
        case "rectangle":
            return shape.x * shape.y
        default:
            assertNever(shape)
    }
}

function assertNever(value: never) {
    console.error("AssertNever", value)
    throw Error("AssertNever")
}

//____________________________________________________________________
//3.4
const circle = {
    radius: 5,
    kind: "circle" as const,
};

area(circle)
//____________________________________________________________________
//3.5
type Dice = 1 | 2 | 3 | 4 | 5 | 6

function rollDice(input: number) {
    if (isDice(input)) {

    }
}

function isDice(value: number): boolean {
    return [1, 2, 3, 4, 5, 6].includes(value)
}

//____________________________________________________________________
//3.6
function iTakeNoParameters(x: void): void {

}

iTakeNoParameters()
iTakeNoParameters(undefined)
iTakeNoParameters(void 2)

function fetchResults(callback: (statusCode: number, result: number[]) => void) {
    // const didItWork =  callback(200, result)
}

//____________________________________________________________________
//3.7
// try {
//     myroutime();
// } catch (e) {
//     if (e instanceof TypeError) {
//         //     Error TypeError
//     } else if (e instanceof RangeError) {
//         //     Error Range Error
//     } else if (e instanceof EvalError) {
//         //     Eval Error
//     } else if (axios.isAxiosError(e)) {
//         // axios проверяет ошибки
//     } else if (typeof e === "string") {
//         //     error string
//     } else {
//         logMyErrors(e)
//     }
// }
//
// function myroutime() {
//     throw new Error("Method not implemented.");
// }
//
// function isAxiosError(payload: any): payload is AxiosError {
//     return payload !== null
//         && typeof payload === "object"
//         && payload.isAxiosError
// }

// ____________________________________________________________________
//3.8
// type SelectBase = {
//     options: string[];
// }
// type SingleSelect = SelectBase & {
//     value: string
//     values?: never
// }
// type MultipleSelect = SelectBase & {
//     values: string[];
//     value?: never
// }
// type SelectProperties = SingleSelect | MultipleSelect
//
// function selectCallback(params: SelectProperties) {
//     if ("value" in params) {
//
//     } else if ("values" in params) {
//
//     }
// }
//
// selectCallback({
//     options: ['dracula', "monokia", "vscode"],
//     value: "dracula"
// })
// selectCallback({
//     options: ['dracula', "monokia", "vscode"],
//     values: ["monokia", "vscode"],
// })
// selectCallback({
//     options: ['dracula', "monokia", "vscode"],
//     values: ["monokia", "vscode"],
//     value: "dracula"
// })
//____________________________________________________________________
//3.9

function roolDice(): Dice {
    let num = Math.floor(Math.random() * 6) + 1
    return num as Dice
}

type Person1 = {
    name: string;
    age: number;
}

function createDemoPerson(name: string) {
    const person: Person1 = {
        name,
        age: Math.floor(Math.random() * 10),
    }
    return person;
}

//____________________________________________________________________
//3.10
const timings = {
    "fettblog.org": {
        ttfb: 200,
        fcp: 1000,
        si: 1200,
        lcp: 1000,
        tti: 1000,
        tbt: 10
    },
    "typescript.org": {
        ttfb: 400,
        fcp: 1500,
        si: 1200,
        lcp: 1600,
        tti: 1100,
        tbt: 0
    }
}

function findLowestTiming(collection: MetricCollection, metric: keyof Metrics) {
    let result = {
        domain: "",
        value: Number.MAX_VALUE
    }
    for (const domain in collection) {
        const timing = collection[domain];
        if (timing && timing[metric] < result.value) {
            result.domain = domain
            result.value = timing[metric]
        }
    }
    return result.domain
}

type Metrics = {
    ttfb: number
    fcp: number
    si: number
    lcp: number
    tti: number
    tbt: number
}
// type MetricCollection = {
//     [domain: string]: Metrics | undefined
// }
type MetricCollection = {
    [domain in string]?: Metrics | undefined
}

type StringOrNumberDictionary = {
    [index: string]: string | number
    count: number
}
//____________________________________________________________________
//3.11
type Setting = {
    language: "en" | "de" | "fr";
    theme?: "dracula" | "draco" | "github";
}
type Fn = typeof getTheme;

function applySetting(setting: Setting) {
    const theme = setting.theme
}

function getTheme(setting: Setting) {
    if ('theme' in setting) {
        return setting.theme
    }
    return 'default'
}

const settings: Setting = {
    language: 'de'
}
const settingUndefinedTheme: Setting = {
    language: "de",
    theme: undefined
}


console.log(getTheme(settings))
console.log(getTheme(settingUndefinedTheme))

//____________________________________________________________________
//3.12
const enum Direction {
    Up = 3,
    Down,
    Left,
    Right,
}

function move(direction: Direction1) {
    console.log(direction)
}

move(Direction.Left)

type Status = "Admin" | "User" | "Moderator"

function closeThread(threadId: number, status: Status) {
    console.log(status)
}

closeThread(10, "Admin")

const Direction1 = {
    Up: 3,
    Down: 4,
    Left: 5,
    Right: 6,
} as const

type Direction1 = (typeof Direction1)[keyof typeof Direction1]

move(Direction1.Left)
//____________________________________________________________________
//3.13
class Balance {
    private _nominal: void = undefined;
    value: number;

    constructor(value: number) {
        this.value = value
    }
}

class AccountNumber {
    private _nominal: void = undefined;
    value: number;

    constructor(value: number) {
        this.value = value
    }
}

const account = new AccountNumber(12255442);
const balance = new Balance(10000);

function accepBalance(balance: Balance) {
    console.log(balance)
}

// accepBalance(account) //Error
accepBalance(balance)


////////////
type Credits = number & { _kind: "Credits" };
type AccountNumber1 = number & { _kind: "AccountNumber" };

const account1 = 332226464 as AccountNumber1;
let balance1 = 10000 as Credits;
const amount = 300 as Credits;

function increase(balance: Credits, amount: Credits) {
    return (balance + amount) as Credits;
}

balance1 = increase(balance1, amount);
// balance1 = increase(balance1, account1); //Error

//____________________________________________________________________
//3.14
type Entry = {}
type ContentText = "post" | "page" | "assets" | string & {}

function retrieve(contentText: ContentText): Entry[] {

    return []
}

retrieve("page")
