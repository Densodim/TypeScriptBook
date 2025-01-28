//____________________________________________________________________
//4.1

type Language = {
    de: string
    en: string
    it: string
    pt: string
    fr: string
    ja: string
}

function isLanguageAvailable(collection: Language, lang: string): lang is keyof Language {
    return lang in collection
}

function loadLanguage(collection: Language, lang: string) {
    if (isLanguageAvailable(collection, lang)) {
        collection[lang]
        console.log(collection[lang])
    }
}

/////
type AllowedElements = {
    video: HTMLVideoElement
    audio: HTMLAudioElement
    canvas: HTMLCanvasElement
}

function isElementAllowed(collection: AllowedElements, elem: string): elem is keyof AllowedElements {
    return elem in collection
}

function selectElement(collection: AllowedElements, elem: string) {
    if (isElementAllowed(collection, elem)) {
        collection[elem]
    }
}

//////
function isAvailable<Obj extends object>(obj: Obj, key: string | number | symbol): key is keyof Obj {
    return key in obj;
}

function selectElement2(collection: AllowedElements, elem: string): AllowedElements[keyof AllowedElements] | undefined {
    if (isAvailable(collection, elem)) {
        return collection[elem];
    }
    return undefined; // Если ключ не найден, возвращаем undefined
}

function loadLanguage1(collection: Language, lang: string): void {
    if (isAvailable(collection, lang)) {
        console.log(collection[lang]); // Логируем значение, если ключ найден
    } else {
        console.warn(`Language ${lang} is not available in the collection`);
    }
}


