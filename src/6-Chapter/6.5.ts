type Trim<T extends string> =
    T extends ` ${infer X}` ? Trim<X> :  // Убираем пробел слева
        T extends `${infer X} ` ? Trim<X> :  // Убираем пробел справа
            T; // Если нет пробелов, возвращаем строку

type Trimmed = Trim<"  key  ">


type RemoveWhiteSpace<T extends string> =
    T extends `${infer A} ${infer B}`
        ? RemoveWhiteSpace<`${A}${Capitalize<B>}`> // Убираем пробел и капитализируем следующий символ
        : Uncapitalize<T>; // Делаем первую букву строчной

type Indentifier = RemoveWhiteSpace<"Hello World">;


type StringSplit<T extends string> = T extends `${infer Char}${infer Rest}`
    ? Capitalize<Char> | Uncapitalize<Char> | StringSplit<Rest>
    : never;

type Chars = StringSplit<"fsdfsdfsdfsfsdfsdfsdf">;

// type CreateIndentifier<T extends string> =
//     RemoveWhiteSpace<T> extends `${infer A extends Chars}${infer Rest}`
//         ? `${A}${CreateIndentifier<Rest>}`
//         : RemoveWhiteSpace<T> extends `${infer A}${infer Rest}`
//             ? CreateIndentifier<Rest>
//             : T

type CreateIndentifier<T extends string, Acc extends string = ""> =
    RemoveWhiteSpace<T> extends `${infer A extends Chars}${infer Rest}`
        ? CreateIndentifier<Rest, `${Acc}${A}`>
        : RemoveWhiteSpace<T> extends `${infer A}${infer Rest}`
            ? CreateIndentifier<Rest, Acc>
            : Acc

type Indentifier1 = CreateIndentifier<"Hello Wor!l!d">