import { merge } from 'lodash';
const defaults = {
    mode: "dark",
    playbackSpeed: 1.0,
    subtitles: {
        active: false,
        color: 'white'
    }
};
function applySettings(defaultSetting, userSetting) {
    return merge(defaultSetting, userSetting);
}
// let settings1 = applySettings(defaults, {mode: 'light'})
// console.log(settings1)
let settings1 = applySettings(defaults, { subtitles: { active: true } }); //Error
