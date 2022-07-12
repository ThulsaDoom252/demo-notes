import React, {useContext, useState} from 'react';
import homeStyle from "./Home.module.css"
import {FiFilePlus} from "react-icons/fi";
import Notes from "../../components/notes/Notes";
import Alert from "../../components/alert/Alert";
import NoteData from "../../components/notedata/NoteData";
import {NoteDataContext} from "../../context/alert/NoteDataContext";

const Home = () => {
    const {showNoteData} = useContext(NoteDataContext)
    return (
        <div className={homeStyle.container}>
            <button className={homeStyle.button} onClick={() => showNoteData()}>Add new note <FiFilePlus/></button>
            <Alert/>
            <NoteData/>
            <hr className={homeStyle.line}/>
            <Notes/>
        </div>
    );
}

export default Home;