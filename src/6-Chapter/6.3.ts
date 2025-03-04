format("Hello {world}. My name is {you}", {
    world: "World",
    you: "Ivan",
})

function format<T extends string, K extends Record<FormatKeys<T>, any>>(
    fmtString: T,
    params: K
): string {
    let ret: string = fmtString
    for (let k in params) {
        ret = ret.replaceAll(`{${k}}`, params[k as keyof typeof params])
    }
    return ret
}

type FormatKeys<
    T extends string
> = T extends `${string}{${infer Key}}${infer Rest}`
    ? Key | FormatKeys<Rest>
    : never

type A1 = FormatKeys<"Hello {world} Im {you}">
type C1 = FormatKeys<"Hello {world}">
type B1 = FormatKeys<"Hello">

console.log(format("Hello {world}. My name is {you}", {
    world: "World",
    you: "Ivan",
}))




