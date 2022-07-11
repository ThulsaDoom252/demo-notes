import React, {useState} from 'react';
import homeStyle from "./Home.module.css"
import {FiFilePlus} from "react-icons/fi";
import EditWindow from "../../components/editwindow/EditWindow";
import Notes from "../../components/notes/Notes";
import Alert from "../../components/alert/Alert";

const Home = () => {
    const [write, writeMode] = useState(false)
    return (
        <div className={homeStyle.container}>
            <button className={homeStyle.button} onClick={() => writeMode(true)}>Add new note <FiFilePlus/></button>
            <Alert/>
            <EditWindow write={{write, writeMode}}/>
            <hr className={homeStyle.line}/>
            <Notes/>
        </div>
    );
}

export default Home;