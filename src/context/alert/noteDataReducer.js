import {HIDE_ALERT, HIDE_NOTEDATA, SHOW_ALERT, SHOW_NOTEDATA} from "./types";

const handlers = {
    [SHOW_ALERT]: state => ({...state, alertVisible: true}),
    [HIDE_ALERT]: state => ({...state, alertVisible: false}),
    [SHOW_NOTEDATA]: state => ({...state, noteDataVisible: true}),
    [HIDE_NOTEDATA]: state => ({...state, noteDataVisible: false}),
    DEFAULT: state => state,
}


export const noteDataReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)

}