class User1 {
    #id: number;
    static #nextTheadId: number;

    constructor(id: number) {
        this.#id = id
    }

    equals(user: this): boolean {
        return this.#id === user.#id
    }

    async openThead(title: string, contex: string): Promise<number> {
        const theardId = User1.#nextTheadId++
        await fetch('http://localhost:8080', {
            method: 'POST',
            body: JSON.stringify({
                contex,
                title,
                theardId,
            })
        })
        return theardId
    }
}

class Admin extends User1 {
    #privileges: string[]

    constructor(id: number, privileges: string[] = []) {
        super(id);
        this.#privileges = privileges
    }

    async closeThead(id: number) {
        await fetch('http://localhost:8080', {
            method: 'POST',
            body: "" + id
        })
    }
}

const user = new User1(1);
const admin = new Admin(2);

console.log(user.equals(admin))
// console.log(admin.equals(user)) //Error

//_________________________

class OptionBuilder<T = string | number | boolean> {
    #option: Map<string, T> = new Map();

    constructor() {
    }

    add(name: string, value: T): this {
        this.#option.set(name, value);
        return this;
    }

    has(name: string) {
        return this.#option.has(name);
    }

    build() {
        return Object.fromEntries(this.#option)
    }
}

const options = new OptionBuilder()
    .add('default', true)
    .add('compressionFactor', 10)
    .build()

console.log(options)

class StringOprionBuilder extends OptionBuilder<string> {
    safeAdd(name: string, value: string) {
        if (!this.has(name)) {
            this.add(name, value);
        }
        return this
    }
}

const languages1 = new StringOprionBuilder()
    .add('EN', 'English')
    .safeAdd('de', 'Deutsch')