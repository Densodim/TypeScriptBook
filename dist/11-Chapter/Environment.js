export default class Environment {
    static variblelist = [];
    static variables() {
        return this.variblelist;
    }
    static setVarible(key, value) {
    }
    static getValue(key) {
    }
}
class BasicLifeForm {
    age;
    constructor(age) {
        this.age = age;
    }
}
class Human extends BasicLifeForm {
    move() {
        return 'Walking';
    }
}
