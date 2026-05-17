import './App.css';
import { useState } from 'react';
import HomeSection from './pages/HomeSection/HomeSection';
import NoteSection from './pages/NoteSection/NoteSection';

export default function App() {
    const [ section, setSection ] = useState("home"); 

    const ROUTES = {
        "home": <HomeSection section={section} setSection={setSection}/>,
        "add" : <NoteSection section={section} setSection={setSection}/>,
        "edit" : <NoteSection section={section} setSection={setSection}/>,
        "delete": <HomeSection section={section} setSection={setSection}/>,
    }


    return (
        <div className="app">
            { ROUTES[section] }
        </div>
    )
}