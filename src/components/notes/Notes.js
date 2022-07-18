import React from 'react';
import noteStyle from './Notes.module.css'
import classNames from "classnames";
import noteIcon from "./note.png"

const Notes = (props) => (
    <div className={noteStyle.container}>
        {props.notes.length === 0 && <div className={noteStyle.labelEmpty}>Notes list is empty.....</div>}
        {props.notes.map(note => <div className={classNames(noteStyle.body, "card")} style={{"width": "1rem;"}}
                                      key={note.id}>
            <div className={classNames(noteStyle.body, "card")} style={{"width": "1rem;"}}>
                <img className={classNames(noteStyle.image, "card-img-top")} src={noteIcon} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className={classNames(noteStyle.title, "card-title")}>{note.title}</h5>
                    <hr/>
                    <p className={classNames(noteStyle.content, "card-text")}>{note.content ||
                        <i style={{"color": "red"}}>none</i>}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className={classNames(noteStyle.dateElement, "list-group-item")}>{note.date}</li>
                    <li className={classNames(noteStyle.dateElement, "list-group-item")}>{note.time}</li>
                </ul>
                <div className={classNames(noteStyle.bodyButtonsBlock, "card-body")}>
                    <button className={classNames(noteStyle.delete, "card-link")}
                            onClick={() => props.removeNote(note.id)}>Delete
                    </button>
                    <button className={classNames(noteStyle.edit, "card-link")}
                            onClick={() => props.editNoteMode(note.id, note.title, note.content)}>Edit
                    </button>
                </div>
            </div>
        </div>)}
    </div>
)


export default Notes;