interface ComponentConstructor {
    new(): Component;
}

interface Component {
    render(): HTMLElement
}

type Route = {
    path: string
    component: ComponentConstructor
}

// function router<T extends Route>(routers: readonly T[]) {
//     return {
//         navigator(path: T['path']) {
//             history.pushState({}, "", path)
//         }
//     }
// }

function router<const T extends Route>(routers: T[]) {
    return {
        navigator(path: T['path']) {
            history.pushState({}, "", path)
        }
    }
}


const rtr = router([
    {path: '/', component: Main},
    {path: '/about', component: About},
])

rtr.navigator('/about')

