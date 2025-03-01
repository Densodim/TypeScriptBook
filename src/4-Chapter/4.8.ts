declare function create<Data, Computed extends FnObj, Methods>(
    options: Options<Data, Computed, Methods>
): any;


const instance = create({
    data() {
        return {
            firstName: 'Ivan',
            lastName: 'James',
        };
    },
    computed: {
        fullName() {
            return this.firstName + " " + this.lastName;
        },
    },
    methods: {
        getRandom() {
            return Math.random()
        },
        hi() {
            alert(this.fullName.toLowerCase());
        },
        test() {
            console.log(this.fullName)
        }
    }
})

type Options<Data, Computed extends FnObj, Methods> = {
    data?(this: {}): Data;
    computed?: Computed & ThisType<Data>;
    methods?: Methods & ThisType<Data & MapFnToProp<Computed> & Methods>;
}

type FnObj = Record<string, () => any>

type MapFnToProp<FunctionObj extends FnObj> = {
    [K in keyof FunctionObj]: ReturnType<FunctionObj[K]>
}