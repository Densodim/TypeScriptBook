"use strict";
const array = [1, 2, 3, '', undefined, 4, null]; //const array: (number | null | undefined)[]
// const filtered = array.filter((val) => !!val); //const filtered: (number | null | undefined)[]
const filtered = array.filter(Boolean);
const nullOrOne = [0, 1, 0, 1]; //const nullOrOne: (0 | 1)[]
const onlyOnes = nullOrOne.filter(Boolean); //const onlyOnes: 1[]
//__________________________-
