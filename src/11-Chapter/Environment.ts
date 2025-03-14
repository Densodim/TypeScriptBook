export default class Environment {
    private static variblelist: string[] = []

    static variables(): string[] {
        return this.variblelist
    }

    static setVarible(key: string, value: any): void {
    }

    static getValue(key: string) {
    }
}

export namespace Users {
    type UserName = {
        name: string,
        age: number
    }
}

// export function createUser(name: string, age: number): UserName {
//     return {name, age}
//
// }

//_______________________________________
interface Lifeform {
    move(): string
}

class BasicLifeForm {
    age: number

    constructor(age: number) {
        this.age = age
    }
}

class Human extends BasicLifeForm implements Lifeform {
    move() {
        return 'Walking'
    }
}