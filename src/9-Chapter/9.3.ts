const storage = {
    currentValue: 0
}

// Object.defineProperty(storage, 'maxValue', {
//     value: 9001,
//     writable: false
// })

defineProperty(storage, 'maxValue', {
    value: 9001,
    writable: false
})

console.log(storage.maxValue)
// storage.maxValue = 2 //Error
console.log(storage)

const storageName = 'My Storage';
defineProperty(storage, 'name', {
    get() {
        return storageName
    }
})

storage.name //string

// defineProperty(storage, 'broken', {    //Error
//     get(): any {
//         return storageName
//     },
//     value: 4000
// })
//
console.log(storage)

//___________________
function defineProperty<
    Obj extends object,
    Key extends PropertyKey,
    PDesc extends PropertyDescriptor>
(obj: Obj, prop: Key, val: PDesc): asserts obj is Obj & DefineProperty<Key, PDesc> {
    Object.defineProperty(obj, prop, val)
}

type DefineProperty<
    Prop extends PropertyKey,
    Desc extends PropertyDescriptor> =
    Desc extends { writable: any, set(val: any): any } ? never :
        Desc extends { writable: any, get(): any } ? never :
            Desc extends { writable: false } ? Readonly<InferValue<Prop, Desc>> :
                Desc extends { writable: true } ? InferValue<Prop, Desc> :
                    Readonly<InferValue<Prop, Desc>>

type InferValue<Prop extends PropertyKey, Desc> =
    Desc extends { get(): any, value: any } ? never :
        Desc extends { value: infer T } ? Record<Prop, T> :
            Desc extends { get(): infer T } ? Record<Prop, T> : never

//___________________-

function assertIsNumber(val: any): asserts val is number {
    if (typeof val !== 'number') {
        throw new Error('Not a number')
    }
}

function multiply(x: any, y: any) {
    assertIsNumber(x);
    assertIsNumber(y)

    return x * y
}