abstract class FilterItem implements IFilter {
    constructor(private property: string) {
    }

    someFunction() {
    }

    abstract filter(): void
}

class AFilter extends FilterItem {
    filter() {
    }
}

class BFilter extends FilterItem {
    filter() {
    }
}

const some: FilterItem = new AFilter('afilter') //ok


filrerMap.set('number', AFilter)
filrerMap.set('stuff', BFilter)
// filrerMap.set('notworking', FilterItem)//Error

//__________________________

interface IFilter {
    someFunction(): void;

    filter(): void;
}

interface FilterConstructor {
    new(property: string): IFilter;
}

declare const filrerMap: Map<string, FilterConstructor>

//____________________________

let obj: IFilter;
const ctor = filrerMap.get('number')

if (typeof ctor !== 'undefined') {
    obj = new ctor('a');
}

