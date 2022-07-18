import React, {useReducer} from 'react';
import {NoteDataContext} from "./NoteDataContext";
import {noteDataReducer} from "./noteDataReducer";
import {TOGGLE_ALERT, TOGGLE_EDITMODE, TOGGLE_NOTEDATA} from "../types";

export const NoteDataState = ({children}) => {
    const initialState = {
        alertMessage: false,
        noteData: false,
        editMode: false
    }

    const [state, dispatch] = useReducer(noteDataReducer, {...initialState})

    const toggleAlert = (isVisible) => dispatch({type: TOGGLE_ALERT, isVisible})
    const toggleNoteData = (isVisible) => dispatch({type: TOGGLE_NOTEDATA, isVisible})
    const toggleEditMode = (isOn) => dispatch({type: TOGGLE_EDITMODE, isOn})

    return (
        <NoteDataContext.Provider value={{toggleAlert, toggleNoteData, toggleEditMode,  noteDataState: state}}>
            {children}
        </NoteDataContext.Provider>
    );
}
