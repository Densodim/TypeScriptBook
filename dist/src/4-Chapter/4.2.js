"use strict";
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
function feachFile(urls, key) {
    return fetch(urls[key]).then((res) => res.json());
}
const de = feachFile(languages, 'de');
// const md = feachFile(languages, 'md') //Error
////
function feachFiles1(urls, keys) {
    const els = keys.map((el) => fetch(urls[el])
        .then((res) => res.json())
        .then((data) => {
        const entry = [el, data];
        return entry;
    }));
    return els;
}
const de_and_fr = feachFiles1(languages, ['de', 'fr']);
// const de_and_md = feachFiles1(languages, ['de', 'md']) //Error
////
function feachFiles2(urls, keys) {
    const els = keys.map((el) => fetch(urls[el])
        .then((res) => res.json())
        .then((data) => {
        const entry = [el, data];
    }));
    return els;
}
const de_and_it = feachFiles2(languages, ['de', 'it']);
