import {User} from "../5-Chapter/5.4";

type Order = {
    id: number;
    product: string;
    amount: number;
};

type UserRequest =
    | {
    state: "USER_PENDING",
}
    | {
    state: "USER_ERROR",
    message: string
}
    | {
    state: "USER_SUCCESS",
    data: User
}

type OrderRequest =
    | {
    state: "ORDER_PENDING",
}
    | {
    state: "ORDER_ERROR",
    message: string
}
    | {
    state: "ORDER_SUCCESS",
    data: Order
}

type Data = {
    user: User | null
    order: Order | null
}

type RequestConstants = keyof Data

type Pending = {
    state: `${Uppercase<RequestConstants>}_PENDING`,
}
type Error = {
    state: `${Uppercase<RequestConstants>}_ERROR`,
    message: string
}
type Success = {
    [K in RequestConstants]: {
        state: `${Uppercase<RequestConstants>}_SUCCESS`,
        data: NonNullable<Data[K]>
    }
}[RequestConstants]

type BackendRequest = Pending | Error | Success

function execute(req: BackendRequest) {
    switch (req.state) {
        case "USER_PENDING":
            console.log("Login pending ....")
            break;
        case "USER_ERROR":
            throw new Error(`Login failed.${req.message}`)
        case "USER_SUCCESS":
            login(req.data)
            break
        case "ORDER_PENDING":
            console.log("Fetch order pending ....")
            break
        case "ORDER_ERROR":
            throw new Error(`Fetch order failed: ${req.message}`)
        case "ORDER_SUCCESS":
            displayOrder(req.data)
            break
    }
}


// Добавь заглушки для функций
function login(user: NonNullable<Data["user"]> | NonNullable<Data["order"]>) {
    console.log(`User logged in: ${user}`);
}

function displayOrder(order: NonNullable<Data["user"]> | NonNullable<Data["order"]>) {
    console.log(`Order details: ${order}`);
}



