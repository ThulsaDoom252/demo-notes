import React from 'react';
import buttonStyle from "./addNoteButton.module.css";
import {FiFilePlus} from "react-icons/fi";

const AddNoteButton = (props) => (
    <button className={buttonStyle.button} onClick={props.addNoteMode}>Add new note <FiFilePlus/></button>)

export default AddNoteButton;