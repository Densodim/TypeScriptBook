import React, {useContext} from "react";

// const AppContex = React.createContext({
//     authenticated: true,
//     lang: 'en',
//     theme: 'dark',
// })

// const AppContex = React.createContext<Partial<ContexProps>>({})

const [useAppContext, AppContextProvider] = createContex<ContexProps>()

function App() {
    return (
        <AppContextProvider
            value={{
                authenticated: true,
                lang: 'en',
                theme: 'dark',
            }}>
            <Header/>
        </AppContextProvider>
    )
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
    const {authenticated} = useAppContext()
    if (authenticated) {
        return <h1>Logged in!</h1>
    }
    return <h1>You need to sing in</h1>
}

//_________________________________-
function createContex<Props extends {}>() {
    const ctx = React.createContext<Props | undefined>(undefined);

    function useInnerCtx() {
        const c = useContext(ctx);
        if (c === undefined) {
            throw new Error("Context must be consumed within a Provider");
        }
        return c;
    }

    return [useInnerCtx, ctx.Provider as React.Provider<Props>] as const
}

//__________________________________________________________

type ContexProps = {
    authenticated: boolean
    lang: string
    theme: string
}