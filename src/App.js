import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts";
import {NoteDataState} from "./context/noteData/NoteDataState";
import {FireBaseState} from "./context/firebase/firebaseState";

function App() {
    return (
        <FireBaseState>
            <NoteDataState>
                <BrowserRouter>
                    <div className="App">
                        <NavBar/>
                        <Routes>
                            <Route path={'/'} element={<Home/>}/>
                            <Route path={'/about'} element={<About/>}/>
                            <Route path={'/contacts'} element={<Contacts/>}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </NoteDataState>
        </FireBaseState>
    );
}

export default App;
