import {merge} from 'lodash';

type Setting1 = {
    mode: 'light' | 'dark'
    playbackSpeed: number
    subtitles: {
        active: boolean,
        color: string
    }
}

const defaults: Setting1 = {
    mode: "dark",
    playbackSpeed: 1.0,
    subtitles: {
        active: false,
        color: 'white'
    }
}

type DeepPartial<T> = T extends object
    ? {
        [K in keyof T]?: DeepPartial<T[K]>
    }
    : T

function applySettings(
    defaultSetting: Setting1,
    userSetting: DeepPartial<Setting1>
): Setting1 {
    return merge(defaultSetting, userSetting)
}

// let settings1 = applySettings(defaults, {mode: 'light'})
// console.log(settings1)

let settings1 = applySettings(defaults, {subtitles: {active: true}}) //Error