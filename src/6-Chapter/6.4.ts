format("Hello {world:string}. My name is {you}, {age:number}", {
    world: "World",
    age: 38,
    you: "Ivan",
})

function format<T extends string, K extends FormatObj<T>>(
    fmtString: T,
    params: K
): string {
    let ret: string = fmtString
    for (let k in params) {
        let val = `${params[k]}`
        let searchPattern = new RegExp(`{${k}:?.*?}`, 'g')
        ret = ret.replaceAll(searchPattern, val)
    }
    return ret
}


type FormatObj<
    T extends string
> = T extends `${string}{${infer Key}}${infer Rest}`
    ? Key extends `${infer KeyPart}:${infer TypePart}`
        ? { [K in KeyPart]: MapFormatType[TypePart] } & FormatObj<Rest>
        : { [K in Key]: { toString(): string } } & FormatObj<Rest>
    : {};

type MapFormatType = {
    string: string
    number: number
    boolean: boolean
    [x: string]: any
}

type A3 = MapFormatType['string']
type B3 = MapFormatType['number']
type C3 = MapFormatType['notavialle']

