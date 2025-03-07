const Direction2 = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3
} as const;

type Direction2 = (typeof Direction2)[keyof typeof Direction2];

function move(direction: Direction2) {

}

// move(30); //Error
move(0)
move(Direction2.Left)


const commandItems = [
    'echo',
    'grep',
    'sed',
    'awk',
    'cup',
    'uniq',
    'head',
    'tail',
    'xargs',
    'shift'
] as const;

function capitalize(x: string): string {
    return x.charAt(0).toUpperCase() + x.slice(1);
}

type Values<T> = T[keyof T];

function createEnum<T extends readonly string[], B extends boolean>(
    arr: T,
    numeric?: B
) {
    let obj: any = {}
    for (let [i, el] of arr.entries()) {
        obj[capitalize(el)] = numeric ? i : el;
    }
    return obj as Enum<T, B>;
}

const Command = createEnum(commandItems, false);
console.log(Command)
type Command = Values<typeof Command>
// type Test1 = Command['Shift'];

const CommandN = createEnum(commandItems, true)



type TupleToUnion<T extends readonly string[]> = T extends readonly [
        ...infer Rest extends string[],
        infer Key extends string
    ]
    ? { key: Key; val: Rest['length'] } | TupleToUnion<Rest>
    : never

type Enum<T extends readonly string[], N extends boolean = false> = Readonly<
    {
        [K in TupleToUnion<T> as Capitalize<K['key']>]: N extends true
        ? K['val']
        : K['key']
    }
>

//_______________________________test
type Direction3 = ['up', 'down', 'left', 'right'];

type DirectionUnion = TupleToUnion<Direction3>
// type DirectionUnion = 'right' | 'left' | TupleToUnion<['up', 'down']>

type DirectionLength = Direction3['length']


