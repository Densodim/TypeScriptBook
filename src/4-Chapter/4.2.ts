

//____________________________________________________________________
//4.2
const languages = {
    de: 'https://ggdgfdf.com',
    en: 'https://example.com/english',
    fr: 'https://example.com/french',
    pt: 'https://example.com/portuguese',
    ja: 'https://example.com/japan',
    it: 'https://example.com/italian',
};

type URLList = {
    [key: string]: string
}

function feachFile<List extends URLList>(urls: List, key: keyof List): Promise<any> {
    return fetch(urls[key]).then((res) => res.json());
}

const de = feachFile(languages, 'de')
// const md = feachFile(languages, 'md') //Error

////
function feachFiles1<List extends URLList>(urls: List, keys: (keyof List)[]) {
    const els = keys.map((el) =>
        fetch(urls[el])
            .then((res) => res.json())
            .then((data) => {
                const entry: [keyof List, any] = [el, data]
                return entry;
            })
    )
    return els
}

const de_and_fr = feachFiles1(languages, ['de', 'fr'])
// const de_and_md = feachFiles1(languages, ['de', 'md']) //Error

////
function feachFiles2<List extends URLList, Keys extends keyof List>(urls: List, keys: Keys[]) {
    const els = keys.map((el) =>
        fetch(urls[el])
            .then((res) => res.json())
            .then((data) => {
                const entry: [Keys, any] = [el, data]
            })
    )
    return els
}

const de_and_it = feachFiles2(languages, ['de', 'it'])


