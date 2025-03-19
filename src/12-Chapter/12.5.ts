import {z} from "zod";

type Person2 = {
    name: string
    age: number
    profession?: string | undefined
    status: "active" | "inactive" | "registered"
}

type Results = {
    entries: Person2[]
}

const Person = z.object({
    name: z.string(),
    age: z.string().min(0).max(150),
    profession: z.string().optional(),
    status: z.union([
        z.literal("active"),
        z.literal("inactive"),
        z.literal("registered"),
    ])
        .transform((val) => {
            if (val === "registered") {
                return "active"
            }
            return val
        })
})
const Results = z.object({
    entries: z.array(Person),
})

type PersonTypeInput = z.input<typeof Person>;

type PersonTypeOutput = z.output<typeof Person>;

type PersonType = z.infer<typeof Person>;

//______________________________-
type ResultsType = z.infer<typeof Results>;

// async function featchData(): Promise<ResultsType> {
//     const data = await fetch('http://localhost:8080/api/persons').then((res) => res.json());
//     return Results.parse(data);
// }

async function featchData(): Promise<ResultsType> {
    const data = await fetch('http://localhost:8080/api/persons').then((res) => res.json());
    const results = Results.safeParse(data);
    if (results.success) {
        return results.data
    } else {
        return {entries: []}
    }
}

try {
    const res = await featchData();
} catch (e) {
    throw Error('Error');
}


