import React, {useContext, useEffect, useState} from 'react';
import homeStyle from "./Home.module.css"
import Notes from "../../components/notes/Notes";
import NoteData from "../../components/notedata/NoteData";
import {FireBaseContext} from "../../context/firebase/FiteBaseContext";
import AddNoteButton from "../../components/addNoteButton/addNoteButton";
import {NoteDataContext} from "../../context/noteData/NoteDataContext";
import Alert from "../../components/alert/Alert";
import Wallpaper from "../../components/backgroundImage/BackgroundImage";
import Paginator from "../../components/paginator/Paginator";

const Home = () => {
    const {noteDataState, toggleAlert, toggleNoteData, toggleEditMode} = useContext(NoteDataContext)
    const {
        firebase,
        currentNotes,
        getNotesFireBase,
        changePage,
        addNoteFireBase,
        removeNoteFireBase,
        changeNoteDataFireBase
    } = useContext(FireBaseContext)
    const [title, setTitle] = useState(null)
    const [content, setContent] = useState(null)
    const [noteId, setNoteId] = useState(null)

    useEffect(() => {
        getNotesFireBase()
    }, [])

    const addNoteMode = () => {
        if (noteDataState.editMode) {
            toggleEditMode(false)
            toggleNoteData(true)
        } else
            toggleNoteData(true)
    }

    const editNoteMode = (id, title, content) => {
        toggleEditMode(true)
        setTitle(title)
        setContent(content)
        setNoteId(id)
        toggleNoteData(true)
    }

    const hideNoteData = () => {
        toggleNoteData(false)
        setTitle(null)
        setContent(null)
    }

    const addNote = () => {
        if (!title) {
            toggleAlert(true)
        } else {
            addNoteFireBase(title, content)
            hideNoteData()
        }
    }

    const changeNoteData = (id, title, content) => {
        changeNoteDataFireBase(id, title, content)
        hideNoteData()
    }

    return (
        <div className={homeStyle.container}>
            <Wallpaper/>
            <AddNoteButton addNoteMode={addNoteMode}/>
            {noteDataState.alertMessage && <Alert displayAlert={toggleAlert}/>}
            {noteDataState.noteData &&
                <NoteData editMode={noteDataState.editMode} alert={noteDataState.alertMessage} addNote={addNote}
                          id={noteId}
                          title={title}
                          content={content} setTitle={setTitle}
                          setContent={setContent} hideNoteData={hideNoteData} changeNoteData={changeNoteData}/>}
            <hr className={homeStyle.line}/>
            <Notes notes={currentNotes} removeNote={removeNoteFireBase} editNoteMode={editNoteMode}
                   toggleEditMode={toggleEditMode}/>
            <Paginator  currentPage = {firebase.currentPage} notesPerPage={firebase.notesPerPage} totalNotes={firebase.notes.length} changePage={changePage}/>
        </div>
    );
}

export default Home;