type CallbackFn<Met extends Methods, Par extends string> = (
    req: ServerRequest<Met, Par>,
    reply: ServerReply
) => void;

type ServerRequest<Met extends Methods, Par extends string = string> = {
    method: Met;
    params: Record<Par, string>;
}

type ServerReply = {
    send: (obj?: any) => void;
    status: (statusCode: StatusCode) => ServerReply
}

type ParseRouteParams<Route> =
    Route extends `${string}/:${infer P}/${infer R}`
        ? P | ParseRouteParams<`/${R}`>
        : Route extends `${string}/:${infer P}`
            ? P
            : never

// type Params = ParseRouteParams<"/api/user/:userID">  //Initial type:"userID"
// type MoreParams = ParseRouteParams<"/api/user/:userID/order/:orderId"> //Initial type:"orderId" | "userID"
// type NoParams = ParseRouteParams<"/api/user"> // Initial type:never

type IncludesRouteParams<Par extends string> =
    | `${string}/:${Par}`
    | `${string}/:${Par}/${string}`

type WithUserID = ServerRequest<"GET", "userID">

type OnlyGET = ServerRequest<"GET">
type OnlyPOST = ServerRequest<"POST">
type POSTorPUT = ServerRequest<"PUT" | "POST">

type Methods = 'GET' | 'POST' | 'PUT' | "DELETE";

type StatusCode =
    100 | 101 | 102 | 200 | 201 | 202 | 203 | 204 | 205 |
    206 | 207 | 208 | 226 | 300 | 301 | 302 | 303 | 304 |
    305 | 306 | 307 | 308 | 400 | 401 | 402 | 403 | 404 |
    405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 |
    414 | 415 | 416 | 417 | 418 | 420 | 422 | 423 | 424 |
    425 | 426 | 428 | 429 | 431 | 444 | 449 | 450 | 451 |
    499 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 |
    508 | 509 | 510 | 511 | 598 | 599;

const app = {
    get: function <Path extends string = string>(patch: Path, callback: CallbackFn<'GET', ParseRouteParams<Path>>) {

    }
}

function get<Path extends string = string>(patch: string, callback: CallbackFn<'GET', ParseRouteParams<Path>>) {

}

// const handler: CallbackFn<"PUT" | "POST", "userID"> = function (res, req) {
//     res.method
// }
// const hadlerForAllMethods: CallbackFn<Methods> = function (res, req) {
//     res.method
// }

//______________________________________
app.get('http://localhost:8080/api/users/:userID/order/:orderID', function (req, res) {
    req.params.userID;
    req.params.orderID;
    res.status(201).send({
        message: `User ID: ${req.params.userID}`,
    })
});
// app.get('http://localhost:8080', hadlerForAllMethods);
