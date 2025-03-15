"use strict";
class Account {
    id;
    userName;
    state = 'active';
    orders;
    constructor(id) {
        this.id = id;
        fetch('http://localhost:8080')
            .then((res) => res.json())
            .then((data) => (this.userName = data.userName ?? 'not-fount'));
    }
}
//___________________________
class Account1 {
    id;
    userName;
    state = 'active';
    orders;
    constructor(id, userName) {
        this.id = id;
        this.userName = userName;
    }
    static async create(id) {
        const user = await fetch(`/api/getName?id=${id}`).then((res) => res.json());
        return new Account1(id, user.userName);
    }
}
//__________________________
