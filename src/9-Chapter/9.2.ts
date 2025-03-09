type Person4 = {
    name: string,
    age: number,
}

const ppl:Person4[] = await fetch("http://localhost:8080/api/people").then((res) => res.json())

export { }
