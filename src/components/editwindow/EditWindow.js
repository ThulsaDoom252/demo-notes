import React from 'react';
import editWindowStyle from "./EditWindow.module.css"

const EditWindow = ({show}) => {
    if (!show.write)  {
        return null
    }
    return (
        <div className={editWindowStyle.container}>
            <input className={editWindowStyle.input} placeholder={`enter note's title`}/><br/>
            <hr/>
            <br/>
            <textarea className={editWindowStyle.textArea} placeholder={`enter note's content`}/>
            <br/>
            <button className={editWindowStyle.cancelButton} onClick={() => show.writeMode(false)}>Cancel</button>
            <button className={editWindowStyle.addButton}>Add</button>
            <button hidden={true}>Save</button>
        </div>
    );
}

export default EditWindow;