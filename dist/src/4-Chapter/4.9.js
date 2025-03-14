"use strict";
// function router<T extends Route>(routers: readonly T[]) {
//     return {
//         navigator(path: T['path']) {
//             history.pushState({}, "", path)
//         }
//     }
// }
function router(routers) {
    return {
        navigator(path) {
            history.pushState({}, "", path);
        }
    };
}
const rtr = router([
    { path: '/', component: Main },
    { path: '/about', component: About },
]);
rtr.navigator('/about');
