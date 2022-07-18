import React, {useReducer} from "react";
import {FireBaseContext} from "./FiteBaseContext"
import {
    addNoteAC, changeNoteAC, changePageAC,
    fireBaseReducer, getNoteDataAC,
    getNotesAC,
    removeNoteAC
} from "./firebaseReducer";
import axios from "axios";
import alert from "../../components/alert/Alert";

export const FireBaseState = ({children}) => {

    const initialState = {
        notes: [],
        loading: false,
        id: null,
        title: null,
        content: null,
        wallpaper: null,
        notesPerPage: 7,
        currentPage: 1
    }
    const [state, dispatch] = useReducer(fireBaseReducer, {...initialState})

    const indexOfLastNote = state.currentPage * state.notesPerPage
    const indexOfFirstNote = indexOfLastNote - state.notesPerPage
    const currentNotes = state.notes.slice(indexOfFirstNote, indexOfLastNote)

    const changePage = (pageNumber) => {
        dispatch(changePageAC(pageNumber))
    }

    const baseUrl = 'https://fir-notes-99a3e-default-rtdb.firebaseio.com'

    window.notes = state.notes
    window.title = state.title
    window.content = state.content
    window.id = state.id

    const getNoteData = (id, title, content) => {
        dispatch(getNoteDataAC(id, title, content))
    }

    const getNotesFireBase = () => {
        axios.get(`${baseUrl}/notes.json`).then(response => {
            const payload = Object.keys(response.data).map(note => {
                return {
                    ...response.data[note],
                    id: note
                }
            })
            dispatch(getNotesAC(payload))
        })
    }

    const addNoteFireBase = (title, content) => {
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
        const time = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`
        const note = {
            title,
            content,
            date,
            time
        }
        try {
            axios.post(`${baseUrl}/notes.json`, note).then(response => {
                const payload = {
                    ...note,
                    id: response.data.name
                }
                dispatch(addNoteAC(payload))
            })
        } catch {
            alert('some error occured')

        }
    }

    const changeNoteDataFireBase = (id, title, content) => {
        const note = {
            title,
            content
        }
        try {
            axios.patch(`${baseUrl}/notes/${id}.json`, note).then(note => {
                dispatch(changeNoteAC(id, title, content))
            })
        } catch {
            alert('change failed, smth goes wrong')
        }
    }

    const removeNoteFireBase = (id) => {
        try {
            debugger
            axios.delete(`${baseUrl}/notes/${id}.json`)
            dispatch(removeNoteAC(id))
        } catch {
            alert('some error occured')
        }
    }

    // Feature in developing...

    // const changeWallPaper = (wallpaperUpload) => {
    //     if (wallpaperUpload == null) return;
    //     const wallPaperRef = ref(storage, `images/${wallpaperUpload.name + v4()}`)
    //     uploadBytes(wallPaperRef, wallpaperUpload).then(() => {
    //         alert('image uploaded')
    //     })
    //
    // }

    return (
        <FireBaseContext.Provider
            value={{
                addNoteFireBase,
                getNotesFireBase,
                removeNoteFireBase,
                getNoteData,
                changeNoteDataFireBase,
                changePage,
                currentNotes,
                firebase: state
            }}>
            {children}
        </FireBaseContext.Provider>
    )
}










