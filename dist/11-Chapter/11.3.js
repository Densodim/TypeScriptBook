"use strict";
class FilterItem {
    property;
    constructor(property) {
        this.property = property;
    }
    someFunction() {
    }
}
class AFilter extends FilterItem {
    filter() {
    }
}
class BFilter extends FilterItem {
    filter() {
    }
}
const some = new AFilter('afilter'); //ok
filrerMap.set('number', AFilter);
filrerMap.set('stuff', BFilter);
//____________________________
let obj;
const ctor = filrerMap.get('number');
if (typeof ctor !== 'undefined') {
    obj = new ctor('a');
}
