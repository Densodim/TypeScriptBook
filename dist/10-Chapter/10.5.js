import React, { useContext } from "react";
// const AppContex = React.createContext({
//     authenticated: true,
//     lang: 'en',
//     theme: 'dark',
// })
// const AppContex = React.createContext<Partial<ContexProps>>({})
const [useAppContext, AppContextProvider] = createContex();
function App() {
    return (React.createElement(AppContextProvider, { value: {
            authenticated: true,
            lang: 'en',
            theme: 'dark',
        } },
        React.createElement(Header, null)));
}
// function Header() {
//     return (
//         <AppContex.Consumer>
//             {({authenticated}) => {
//                 if (authenticated) {
//                     return <h1>Logged in!</h1>
//                 }
//                 return <h1>You need to sing in</h1>
//             }}
//         </AppContex.Consumer>
//     )
// }
function Header() {
    const { authenticated } = useAppContext();
    if (authenticated) {
        return React.createElement("h1", null, "Logged in!");
    }
    return React.createElement("h1", null, "You need to sing in");
}
//_________________________________-
function createContex() {
    const ctx = React.createContext(undefined);
    function useInnerCtx() {
        const c = useContext(ctx);
        if (c === undefined) {
            throw new Error("Context must be consumed within a Provider");
        }
        return c;
    }
    return [useInnerCtx, ctx.Provider];
}
