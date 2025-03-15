type State = 'active' | 'inactive'

type User = {
    id: number
    userName: string
}

class Account {
    userName!: string
    state: State = 'active'
    orders?: number[]

    constructor(public id: number) {
        fetch('http://localhost:8080')
            .then((res) => res.json() as Promise<User>)
            .then((data: User) => (this.userName = data.userName ?? 'not-fount'))
    }
}

//___________________________
class Account1 {
    state: State = 'active'
    orders?: number[]

    constructor(public id: number, public userName: string) {
    }

    static async create(id: number) {
        const user: User = await fetch(`/api/getName?id=${id}`).then((res) => res.json() as Promise<User>)
        return new Account1(id, user.userName)
    }
}

//__________________________

