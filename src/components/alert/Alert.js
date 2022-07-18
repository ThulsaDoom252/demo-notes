import React from 'react';
import alertStyle from "./Alert.module.css"
import {AiOutlineClose} from "react-icons/ai";

const Alert = (props) => (
    <div className={alertStyle.alert}>
        <button className={alertStyle.closeButton} onClick={() => props.displayAlert(false)}><AiOutlineClose
            className={alertStyle.closeIcon}/>
        </button>
        <p className={alertStyle.text}>Enter a title</p>
    </div>
)


export default Alert;