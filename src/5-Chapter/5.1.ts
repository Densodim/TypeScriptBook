type StringLabel = {
    name: string;
}

type NumberLabel = {
    id: number;
}

type GetLabel<T> = T extends string | StringLabel ? StringLabel :
    T extends number | NumberLabel ? NumberLabel : never;


function createLabel<T extends number | string | StringLabel | NumberLabel>(input: T): GetLabel<T>;
function createLabel(input: number | string | StringLabel | NumberLabel): NumberLabel | StringLabel {
    if (typeof input === 'number') {
        return {id: input}
    } else if (typeof input === 'string') {
        return {name: input}
    } else if ("id" in input) {
        return {id: input.id}
    } else {
        return {name: input.name}
    }
}

function inputToLabel(input: string | number) {
    return createLabel(input)
}