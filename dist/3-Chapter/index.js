"use strict";
// 3.3
function area(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        case "square":
            return shape.x * shape.x;
        case "triangle":
            return (shape.y * shape.y) / 2;
        case "rectangle":
            return shape.x * shape.y;
        default:
            assertNever(shape);
    }
}
function assertNever(value) {
    console.error("AssertNever", value);
    throw Error("AssertNever");
}
//____________________________________________________________________
//3.4
const circle = {
    radius: 5,
    kind: "circle",
};
area(circle);
function rollDice(input) {
    if (isDice(input)) {
    }
}
function isDice(value) {
    return [1, 2, 3, 4, 5, 6].includes(value);
}
//____________________________________________________________________
//3.6
function iTakeNoParameters(x) {
}
iTakeNoParameters();
iTakeNoParameters(undefined);
iTakeNoParameters(void 2);
function fetchResults(callback) {
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
function roolDice() {
    let num = Math.floor(Math.random() * 6) + 1;
    return num;
}
function createDemoPerson(name) {
    const person = {
        name,
        age: Math.floor(Math.random() * 10),
    };
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
};
function findLowestTiming(collection, metric) {
    let result = {
        domain: "",
        value: Number.MAX_VALUE
    };
    for (const domain in collection) {
        const timing = collection[domain];
        if (timing && timing[metric] < result.value) {
            result.domain = domain;
            result.value = timing[metric];
        }
    }
    return result.domain;
}
function applySetting(setting) {
    const theme = setting.theme;
}
function getTheme(setting) {
    if ('theme' in setting) {
        return setting.theme;
    }
    return 'default';
}
const settings = {
    language: 'de'
};
const settingUndefinedTheme = {
    language: "de",
    theme: undefined
};
console.log(getTheme(settings));
console.log(getTheme(settingUndefinedTheme));
function move(direction) {
    console.log(direction);
}
move(5 /* Direction.Left */);
function closeThread(threadId, status) {
    console.log(status);
}
closeThread(10, "Admin");
const Direction1 = {
    Up: 3,
    Down: 4,
    Left: 5,
    Right: 6,
};
move(Direction1.Left);
//____________________________________________________________________
//3.13
class Balance {
    _nominal = undefined;
    value;
    constructor(value) {
        this.value = value;
    }
}
class AccountNumber {
    _nominal = undefined;
    value;
    constructor(value) {
        this.value = value;
    }
}
const account = new AccountNumber(12255442);
const balance = new Balance(10000);
function accepBalance(balance) {
    console.log(balance);
}
// accepBalance(account) //Error
accepBalance(balance);
const account1 = 332226464;
let balance1 = 10000;
const amount = 300;
function increase(balance, amount) {
    return (balance + amount);
}
balance1 = increase(balance1, amount);
function retrieve(contentText) {
    return [];
}
retrieve("page");
