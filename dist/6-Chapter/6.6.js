function execute(req) {
    switch (req.state) {
        case "USER_PENDING":
            console.log("Login pending ....");
            break;
        case "USER_ERROR":
            throw new Error(`Login failed.${req.message}`);
        case "USER_SUCCESS":
            login(req.data);
            break;
        case "ORDER_PENDING":
            console.log("Fetch order pending ....");
            break;
        case "ORDER_ERROR":
            throw new Error(`Fetch order failed: ${req.message}`);
        case "ORDER_SUCCESS":
            displayOrder(req.data);
            break;
    }
}
// Добавь заглушки для функций
function login(user) {
    console.log(`User logged in: ${user}`);
}
function displayOrder(order) {
    console.log(`Order details: ${order}`);
}
export {};
