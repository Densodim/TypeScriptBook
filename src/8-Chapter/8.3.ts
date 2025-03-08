import {Person4} from "./8.1";

type OnlyRequired1<T, K extends keyof T = keyof T> =
    Required<Pick<T, K>> & Partial<Omit<T, K>>


type NameRequired = Remap<OnlyRequired1<Person4, 'name'>>

export type Remap<T> = {
    [K in keyof T]: T[K]
}

export type DeepRemap<T> = T extends object
    ? {
        [K in keyof T]: DeepRemap<T[K]>
    }
    : T

//__________________________
type Subtitles = {
    active: boolean,
    color: string
}

type Setting = {
    mode: 'light' | 'dark'
    playbackSpeed: number
    subtitles: Subtitles
}

type SettingRemapped = DeepRemap<Setting>

