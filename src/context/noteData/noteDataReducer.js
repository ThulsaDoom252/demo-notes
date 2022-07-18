import {
    TOGGLE_ALERT, TOGGLE_EDITMODE,
    TOGGLE_NOTEDATA,
} from "../types";

const handlers = {
    [TOGGLE_ALERT]: (state,action) => ({...state, alertMessage: action.isVisible}),
    [TOGGLE_NOTEDATA]: (state, action)=> ({...state, noteData: action.isVisible}),
    [TOGGLE_EDITMODE]: (state, action) => ({...state, editMode: action.isOn}),
    DEFAULT: state => state,
}



export const noteDataReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)

}