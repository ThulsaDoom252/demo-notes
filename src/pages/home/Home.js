import React, {useState} from 'react';
import homeStyle from "./Home.module.css"
import {FiFilePlus} from "react-icons/fi";
import Notes from "../../components/notes/Notes";
import Alert from "../../components/alert/Alert";
import NoteData from "../../components/notedata/NoteData";

const Home = () => {
    const [showNote, setShowNote] = useState(false)
    return (
        <div className={homeStyle.container}>
            <button className={homeStyle.button} onClick={() => setShowNote(true)}>Add new note <FiFilePlus/></button>
            <Alert/>
            <NoteData statePlug={{showNote, setShowNote}}/>
            <hr className={homeStyle.line}/>
            <Notes/>
        </div>
    );
}

export default Home;