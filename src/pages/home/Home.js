import React from 'react';
import homeStyle from "./Home.module.css"
import {FiFilePlus} from "react-icons/fi";

const Home = (props) => {
    return (
        <div className={homeStyle.container}>
                <button className={homeStyle.button}>Add new note <FiFilePlus className={homeStyle.icon}/></button>
        </div>
    );
}

export default Home;