type ToyBase1 = {
    name: string
    description: string
    minimumAge: number
}

type BoardGame1 = ToyBase & {
    kind: 'boardgame'
    players: number
}

type Puzzle1 = ToyBase & {
    kind: 'puzzle'
    pieces: number
}

type Doll1 = ToyBase & {
    kind: 'doll'
    material: 'plush' | 'plastic'
}

type Bricks1 = ToyBase & {
    kind: 'bricks'
    pieces: number
    brand: string
}

type Toy1 = Doll | Puzzle | BoardGame | Bricks

type ExptractedDoll = Extract<Toy1, { kind: 'doll' }>;

type Group1<
    Collection extends Record<string, any>,
    Selector extends keyof Collection
> = {
    [K in Collection[Selector]]: Extract<Collection, { [P in Selector]: K }> [];
}

type GroupedToys1 = Partial<Group1<Toy1, "kind">>

// function groupToys1(toys: Toy[]): GroupedToys1 {
//     const groups: GroupedToys1 = {}
//
//     for (let toy of toys) {
//         (groups[toy.kind] as Toy[]) = groups[toy.kind] ?? [];
//         (groups[toy.kind] as Toy[])?.push(toy);
//     }
//
//     return groups;
// }

function groupToys1(toys: Toy[]): GroupedToys1 {
    const groups: GroupedToys1 = {}

    for (let toy of toys) {
        assing(groups, toy.kind, toy)
    }
    return groups;
}

function assing<T extends Record<string, K[]>, K>(
    groups: T,
    key: keyof T,
    value: K
) {
    groups[key] = groups[key] ?? [];
    groups[key]?.push(value);
}