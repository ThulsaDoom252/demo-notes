import React, {useReducer} from 'react';
import {NoteDataContext} from "./NoteDataContext";
import {noteDataReducer} from "./noteDataReducer";
import {HIDE_ALERT, HIDE_NOTEDATA, SHOW_ALERT, SHOW_NOTEDATA} from "./types";

export const NoteDataState = ({children}) => {
    const initialState = {
        alertVisible: false,
        noteDataVisible: false
    }

    const [state, dispatch] = useReducer(noteDataReducer, {...initialState})

    const showAlert = () => dispatch({type: SHOW_ALERT})
    const hideAlert = () => dispatch({type: HIDE_ALERT})
    const showNoteData = () => dispatch({type: SHOW_NOTEDATA})
    const hideNoteData = () => dispatch({type: HIDE_NOTEDATA})

    return (
        <NoteDataContext.Provider value={{showAlert, hideAlert, showNoteData, hideNoteData, noteData: state}}>
            {children}
        </NoteDataContext.Provider>
    );
}
