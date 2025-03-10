type Person4 = {
    name: string,
    age: number,
}

const ppl = await fetch("http://localhost:8080/api/people").then((res) => res.json()) as Person4[]

export { }
