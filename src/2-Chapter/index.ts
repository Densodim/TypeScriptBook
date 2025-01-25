// const me:unknown = "Ivan"
// const name:string = me;


function doSomething(value:unknown) {
    if (typeof value == "string") {
        console.log("It's string:", value.toUpperCase())
    }else if (typeof value == "number") {
        console.log("it's number:", value*2)
    }
}

