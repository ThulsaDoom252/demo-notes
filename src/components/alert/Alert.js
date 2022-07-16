import React, {useContext} from 'react';
import alertStyle from "./Alert.module.css"
import {AiOutlineClose} from "react-icons/ai";
import {NoteDataContext} from "../../context/alert/NoteDataContext";

const Alert = () => {
    const {noteData, hideAlert} = useContext(NoteDataContext)

    if (!noteData.alertVisible) {
        return null
    }
    return (
        <div className={alertStyle.alert}>
            <button className={alertStyle.closeButton} onClick={hideAlert}><AiOutlineClose
                className={alertStyle.closeIcon}/>
            </button>
            <p className={alertStyle.text}>Enter a title</p>
        </div>
    );
}

export default Alert;