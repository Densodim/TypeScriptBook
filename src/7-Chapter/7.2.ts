function loadFile(
    fileName: string,
    encoding: string,
    callback: (result: File) => void
) {

}

function request(url: URL, callback: (result: JSON) => void) {

}

function promisify<Args extends unknown[], Res>(
    fn: (...args: [...Args, (result: Res) => void]) => void
): (...args: Args) => Promise<Res> {
    return function (...args: Args) {
        return new Promise((resolve) => {
            function callback(res: Res) {
                resolve(res)
            }

            fn.call(null, ...[...args, callback])
        })
    }
}

const loadFilePromise = promisify(loadFile);
const requestPromise = promisify(request);

function tuple<T extends any[]>(...args: T): T {
    return args
}

function getArrayOfNumber() {
    return [];
}

const number: number[] = getArrayOfNumber();
const t1 = tuple('root', 3, true); //const t1: [string, number, boolean]
const t2 = tuple('bar', ...number) //const t2: [string, ...number[]]


type Fn1<Args extends unknown[], Res> = (
    ...args: [...Args, (result: Res) => void]
) => void

type LoadFileFn = Fn1<[string, string], File>
type RequestFn = Fn1<[URL], JSON>


