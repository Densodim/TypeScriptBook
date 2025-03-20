type ParseRouteParamsName<Route> =
    Route extends `${string}/:${infer Param}/${infer Rest}` ?
        { [Entry in Param | keyof ParseRouteParamsName<`/${Rest}`>]: string } :
        Route extends `${string}/:${infer Param}` ?
            { [Entry in Param]: string } : {}