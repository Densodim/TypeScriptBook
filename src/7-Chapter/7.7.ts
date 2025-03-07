type Fn3 = (...args: any[]) => any;

function defer<F extends Fn3>(
    fn: F,
    ...args: Parameters<F>
): () => ReturnType<F> {
    return () => fn(...args);
}

const log = defer(console.log, 'Hello World');

log();
//______________________

type Result = {
    page:URL;
    title:string;
    description:string;
}

function search(query:string, tags:string[]):Promise<Result[]> {
    throw 'to be done'
}

const searchParams:Parameters<typeof search> = [
    'Variadic',
    ['TypeScript', 'JS'],
]

search(...searchParams)

const deferSearch = defer(search, ...searchParams)
console.log(deferSearch())