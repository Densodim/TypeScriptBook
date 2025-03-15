type ClassFieldDecorator = (value: undefined, contex: {
    kind: 'field'
    name: string | symbol
    access: { get(): unknown, set(value: unknown): void }
    static: boolean
    private: boolean
}) => (initialValue: unknown) => unknown | void

type FieldDecoratorFn = (val: any) => any

function logField<Val>(value: undefined, contex: ClassFieldDecoratorContext): FieldDecoratorFn {
    return function (initialValue: Val): Val {
        console.log(`Initializing ${contex.name.toString()} to ${initialValue}`)
        return initialValue
    }
}


function logDec<This, Args extends any[], Return>(
    value: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext
) {
    return function (this: This, ...args: Args) {
        console.log(`calling ${context.name.toString()}`)
        const val = value.call(this, ...args)
        console.log(`calling ${context.name.toString()}: ${val}`)
        return val
    }
}

function isPromise(val: any): val is Promise<unknown> {
    return (
        typeof val === 'object' &&
        val &&
        "then" in val &&
        typeof val.then === "function"
    )
}

function logMethod<This, Args extends any[], Return>(
    value: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext
): (this: This, ...args: Args) => Return {
    return function (this: This, ...args: Args) {
        console.log(`calling ${context.name.toString()}`)
        const val = value.call(this, ...args)
        if (isPromise(val)) {
            val.then((p: unknown) => {
                console.log(`calling ${context.name.toString()}: ${p}`)
                return p
            })
        } else {
            console.log(`calling ${context.name.toString()}: ${val}`)
        }
        return val
    }
}

class ToggleDec {
    @logField #toogled = false

    @logMethod
    toogle() {
        this.#toogled = !this.#toogled
    }
}

const toogle = new ToggleDec()
toogle.toogle()