//_____________________
type UnionToIntersection<T> =
    (T extends any ? (x: T) => any : never) extends (x: infer R) => any ? R : never

//____________________

type BaseVideoData = {}

type Format320 = { urls: { format320p: URL } };
type Format480 = { urls: { format480p: URL } };
type Format720 = { urls: { format720p: URL } };
type Format1080 = { urls: { format1080p: URL } };

type Video = BaseVideoData & (Format320 | Format480 | Format720 | Format1080);

// type FormatKeys = keyof Video['urls']
type FormatKeysInt = keyof UnionToIntersection<Video['urls']>


function selectFormat(format: FormatKeysInt) {

}

const video1: Video = {
    urls: {
        format320p: new URL('  '),
    }
}
const video2: Video = {
    urls: {
        format320p: new URL('  '),
        format480p: new URL('  '),
    }
}