import React from 'react';
import editWindowStyle from "./NoteData.module.css"

const NoteData = (props) => (
    <div className={editWindowStyle.container}>
        <input className={editWindowStyle.input} placeholder={`enter note's title`} value={props.title}
               onChange={e => props.setTitle(e.target.value)}/><br/>
        <hr/>
        <br/>
        <textarea className={editWindowStyle.textArea} placeholder={`enter note's content`} value={props.content}
                  onChange={e => props.setContent(e.target.value)}/>
        <br/>
        <div className={editWindowStyle.buttonsBlock}>
            <button className={editWindowStyle.cancelButton} onClick={props.hideNoteData}>Cancel</button>
            <button hidden={props.editMode} className={editWindowStyle.addButton} onClick={props.addNote}>Add</button>
            <button hidden={!props.editMode} className={editWindowStyle.addButton}
                    onClick={() => props.changeNoteData(props.id, props.title, props.content)}>Save
            </button>
        </div>
    </div>
)

export default NoteData;