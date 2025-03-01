type ToyBase = {
    name: string
    description: string
    minimumAge: number
}

type BoardGame = ToyBase & {
    kind: 'boardgame'
    players: number
}

type Puzzle = ToyBase & {
    kind: 'puzzle'
    pieces: number
}

type Doll = ToyBase & {
    kind: 'doll'
    material: 'plush' | 'plastic'
}

type Bricks = ToyBase & {
    kind: 'bricks'
    pieces: number
    brand: string
}

type Toy = Doll | Puzzle | BoardGame | Bricks

// type GroupedToys = {
//     [k in Toy["kind"]]?: Toy[]
// }

type GroupedToys = Partial<Group<Toy, "kind">>

// type Group<
//     Collection extends Record<string, any>,
//     Selector extends keyof Collection
// > = {
//     [x in Collection[Selector]]?: Collection[]
// }

type Group<Collection, Selector extends keyof Collection> = {
    [x in Collection[Selector] extends string
        ? Collection[Selector]
        : never]?: Collection[];
}

function groupToys(toys: Toy[]): GroupedToys {
    const groups: GroupedToys = {}

    for (let toy of toys) {
        groups[toy.kind] = groups[toy.kind] ?? []
        groups[toy.kind]?.push(toy);
    }

    return groups;
}
