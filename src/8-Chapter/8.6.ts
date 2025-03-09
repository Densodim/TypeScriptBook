import {Split, VideoFormatURLs} from "./8.5";

//________________-
type ExactlyOne<T> = {
    [K in keyof T]: {
    [P in K]: T[P];
} & {
    [P in Exclude<keyof T, K>]?: never
}
}[keyof T]

type SplitExactlyOne<T, OptionalNever extends boolean = false> = {
    [K in keyof T]: {
    [P in K]: T[P];
} & (OptionalNever extends false
    ? {}
    : {
        [P in Exclude<keyof T, K>]?: never
    })
}[keyof T]

type AllOrNone<T, Keys extends keyof T> = (
    | Required<Pick<T, Keys>>
    | Partial<Record<Keys, never>>
    ) & Split<T>
//________________
type ExactlyOneVideoFormat = AllOrNone<VideoFormatURLs, 'format360p' | 'format720p'>

function loadVideo1(formats: ExactlyOneVideoFormat) {

}

loadVideo1({
    format360p: new URL('  '),
    format720p: new URL('  '),
    format480p: new URL('  '),
})