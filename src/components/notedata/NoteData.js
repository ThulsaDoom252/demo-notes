import React, {useContext, useState} from 'react';
import editWindowStyle from "./NoteData.module.css"
import {NoteDataContext} from "../../context/alert/NoteDataContext";

const NoteData = () => {
    const [title, setTitle] = useState(null)
    const [content, setContent] = useState(null)
    const {noteData, showAlert, hideNoteData} = useContext(NoteDataContext)

    const addNote = () => {
        if (!title) {
            return showAlert()
        } else {
            console.log('success')
            hideNoteData()
            setTitle('')
            setContent('')
        }

    }
    if (!noteData.noteDataVisible) {
        return null
    }
    return (
        <div className={editWindowStyle.container}>
            <input className={editWindowStyle.input} placeholder={`enter note's title`} value={title}
                   onChange={e => setTitle(e.target.value)}/><br/>
            <hr/>
            <br/>
            <textarea className={editWindowStyle.textArea} placeholder={`enter note's content`} value={content}
                      onChange={e => setContent(e.target.value)}/>
            <br/>
            <div className={editWindowStyle.buttonsBlock}>
                <button className={editWindowStyle.cancelButton} onClick={() => hideNoteData()}>Cancel
                </button>
                <button className={editWindowStyle.addButton} onClick={addNote}>Add</button>
                <button hidden={true}>Save</button>
            </div>
        </div>
    );
}

export default NoteData;