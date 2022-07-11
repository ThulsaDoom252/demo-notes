import React, {useState} from 'react';
import homeStyle from "./Home.module.css"
import {FiFilePlus} from "react-icons/fi";
import EditWindow from "../../components/editwindow/EditWindow";

const Home = (props) => {
    const [write, writeMode] = useState(false)
    return (
        <div className={homeStyle.container}>
            <button className={homeStyle.button} onClick={() => writeMode(true)}>Add new note <FiFilePlus/></button>
            <EditWindow show = {{write, writeMode}}/>
        <hr className={homeStyle.line}/>
        </div>
    );
}

export default Home;