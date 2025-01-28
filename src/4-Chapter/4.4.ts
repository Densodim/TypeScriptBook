type FilterRule = {
    field: string;
    operator: string;
    value: any;
}

type CombinatorialFilter = {
    combinator: 'and' | 'or'
    rules: FilterRule[]
}

type ChainedFilter = {
    rules: (CombinatorialFilter | FilterRule)[]
}

type Filter = CombinatorialFilter | ChainedFilter

function reset(filter: Filter): Filter {
    if ('combinator' in filter) {
        return {combinator: 'and', rules: []}
    }
    return {rules: []}
}

const filter: CombinatorialFilter = {combinator: 'or', rules: []}
const resetFilter = reset(filter)

//////
// function reset1<F extends Filter>(filter: F): F {
//     if ('combinator' in filter) {
//         return {combinator: 'and', rules: []}
//     }
//     return {rules: []}
// } //Error

//////

function reset2<F extends Filter>(filter: F): F {
    const result = {...filter}
    result.rules = []
    if ('combinator' in result) {
        result.combinator = 'and'
    }
    return result
}

const resultFilter2 = reset2(filter)

//////////////

type TreeItem<Children extends TreeItem = BaseTreeItem> = {
    id: string
    children: Children[]
    collapsed?: boolean
}
type BaseTreeItem = {
    id: string
    children: BaseTreeItem[]
}

// function createRootItem<T extends TreeItem>():T {
//     return {id:'root', children:[]}
// } //Error

function createRootItem(): TreeItem {
    return {id: 'root', children: []}
}

function attachRoot(children: TreeItem[]): TreeItem {
    return {id: 'root', children}
}

const root = attachRoot([])

////////////

function attachRoot1<T extends TreeItem>(children: T[]): TreeItem<T> {
    return {id: 'root', children}
}

const root2 = attachRoot([
    {
        id: 'child',
        children: [],
        collapsed: false,
    }
])