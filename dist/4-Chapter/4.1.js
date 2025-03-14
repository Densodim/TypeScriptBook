"use strict";
//____________________________________________________________________
//4.1
function isLanguageAvailable(collection, lang) {
    return lang in collection;
}
function loadLanguage(collection, lang) {
    if (isLanguageAvailable(collection, lang)) {
        collection[lang];
        console.log(collection[lang]);
    }
}
function isElementAllowed(collection, elem) {
    return elem in collection;
}
function selectElement(collection, elem) {
    if (isElementAllowed(collection, elem)) {
        collection[elem];
    }
}
//////
function isAvailable(obj, key) {
    return key in obj;
}
function selectElement2(collection, elem) {
    if (isAvailable(collection, elem)) {
        return collection[elem];
    }
    return undefined; // Если ключ не найден, возвращаем undefined
}
function loadLanguage1(collection, lang) {
    if (isAvailable(collection, lang)) {
        console.log(collection[lang]); // Логируем значение, если ключ найден
    }
    else {
        console.warn(`Language ${lang} is not available in the collection`);
    }
}
