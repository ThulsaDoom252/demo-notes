import React from 'react';
import noteStyle from './Notes.module.css'
import classNames from "classnames";
import note from "./note.png"

const  Notes = (props) =>  {
    return (
        <div className={noteStyle.container}>
            {/*{props.note.map(note => <div className={classNames(noteStyle.body, "card")} style={{"width": "1rem;"}}*/}
            {/*                             key={note.id}>*/}
            <div className={classNames(noteStyle.body, "card")} style={{"width": "1rem;"}}>
                <img className={classNames(noteStyle.image, "card-img-top")} src={note} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className={classNames(noteStyle.title, "card-title")}>Note title</h5>
                    <hr/>
                    <p className={classNames(noteStyle.content, "card-text")}>Note content</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className={classNames(noteStyle.dateElement, "list-group-item")}>Note date</li>
                    <li className={classNames(noteStyle.dateElement, "list-group-item")}>Note time</li>
                </ul>
                <div className={classNames(noteStyle.bodyButtonsBlock, "card-body")}>
                    <button className={classNames(noteStyle.delete,"card-link")}>Delete</button>
                    <button className={classNames(noteStyle.edit,"card-link")}>Edit</button>
                </div>
            </div>
            {/*</div>)}*/}
        </div>
    );
}

export default Notes;