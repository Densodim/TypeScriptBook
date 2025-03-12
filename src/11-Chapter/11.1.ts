class PersonClass {
    #name: string;

    constructor(name: string) {
        this.#name = name;
    }

    get name(): string {
        return this.#name.toUpperCase()
    }
}

const nyName = new PersonClass('Ivan');
console.log(nyName.name)

class Category {
    constructor(
        public title: string,
        public id: number,
        private reference: bigint
    ) {
    }
}

