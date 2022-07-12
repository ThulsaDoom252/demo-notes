import React, {useContext} from 'react';
import alertStyle from "./Alert.module.css"
import {AiOutlineClose} from "react-icons/ai";
import {AlertContext} from "../../context/alert/AlertContext";

const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    if (!alert.visible) {
        return null
    }
    return (
        <div className={alertStyle.alert}>
            <button className={alertStyle.closeButton} onClick={hide}><AiOutlineClose className={alertStyle.closeIcon}/>
            </button>
            <p className={alertStyle.text}>Enter a title</p>
        </div>
    );
}

export default Alert;