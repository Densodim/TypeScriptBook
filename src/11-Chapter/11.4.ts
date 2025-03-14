class Collection<T = never> {
    items: T[];

    constructor() {
        this.items = []
    }

    add(item: T) {
        this.items.push(item)
    }

    contains(item: T): boolean {
        return this.items.includes(item)
    }
}

const numbers = new Collection<number>()
numbers.add(1)
numbers.add(2)

const strings = new Collection<string>()
strings.add('Hello')
strings.add('World')

// const numbersInf = new Collection() //Error
// numbersInf.add(1) //Error
