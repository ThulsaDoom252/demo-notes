import {
    ADD_NOTE,
    CHANGE_NOTE, CHANGE_PAGE, GET_DATA,
    GET_NOTES,
    REMOVE_NOTE
} from "../types";

export const getNotesAC = (payload) => ({type: GET_NOTES, payload})
export const addNoteAC = (payload) => ({type: ADD_NOTE, payload})
export const removeNoteAC = (id) => ({type: REMOVE_NOTE, id})
export const changePageAC = (pageNumber) => ({type: CHANGE_PAGE, pageNumber})
export const getNoteDataAC = (id, title, content) => ({type: GET_DATA, id, title, content})
export const changeNoteAC = (id, title = null, content = null) => ({type: CHANGE_NOTE, id, title, content})

export const fireBaseReducer = (state, action) => {
    switch (action.type) {
        case GET_NOTES:
            return {
                ...state, notes: [...action.payload]
            }

        case GET_DATA:
            return {
                ...state,
                id: action.id,
                title: action.title,
                content: action.content,
            }

        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }

        case CHANGE_NOTE:
            return {
                ...state,
                notes: [...state.notes.map(note => note.id === action.id ? {
                    ...note,
                    title: action.title,
                    content: action.content
                } : {...note, title: note.title, content: note.content})]
            }

        case CHANGE_PAGE:
            return  {
                ...state,
                currentPage: action.pageNumber
            }


        case REMOVE_NOTE:
            return {
                ...state,
                notes: [...state.notes.filter(note => note.id !== action.id)]
            }
        default:
            return state
    }
}