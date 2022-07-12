import React, {useContext, useState} from 'react';
import editWindowStyle from "./NoteData.module.css"
import {AlertContext} from "../../context/alert/AlertContext";

const NoteData = ({statePlug}) => {
    const [title, setTitle] = useState(null)
    const [content, setContent] = useState(null)

    const {show} = useContext(AlertContext)

    const addNote = () => {
        if (!title) {
            return show()
        } else {
            console.log('success')
            statePlug.setShowNote(false)
            setTitle('')
            setContent('')
        }

    }
    if (!statePlug.showNote) {
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
                <button className={editWindowStyle.cancelButton} onClick={() => statePlug.setShowNote(false)}>Cancel
                </button>
                <button className={editWindowStyle.addButton} onClick={addNote}>Add</button>
                <button hidden={true}>Save</button>
            </div>
        </div>
    );
}

export default NoteData;