export type VideoFormatURLs = {
    format360p: URL
    format480p: URL
    format720p: URL
    format1080p: URL
}

type AvailableVideoFormats = {
    [K in keyof VideoFormatURLs]: {
        [P in K]: VideoFormatURLs[P]
    }
}[keyof VideoFormatURLs];

//_______________________
export type Split<T> = {
    [K in keyof T]: {
        [P in K]: T[P]
    }
}[keyof T]
//___________________________--

function loadVideo(formats: Split<VideoFormatURLs>) {

}

loadVideo({
    format360p: new URL('  '),
    format480p: new URL('  '),
})

