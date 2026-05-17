import './App.css';
import { useState } from 'react';
import HomeSection from './pages/HomeSection/HomeSection';
import NoteSection from './pages/NoteSection/NoteSection';

export default function App() {
    const [ section, setSection ] = useState("home"); 
    const [selectedNote, setSelectedNote] = useState(null);

    const ROUTES = {
        "home": <HomeSection section={section} setSection={setSection} setSelectedNote={setSelectedNote}/>,
        "add" : <NoteSection section={section} setSection={setSection} selectedNote={null}/>,
        "edit" : <NoteSection section={section} setSection={setSection} selectedNote={selectedNote}/>,
        "delete": <HomeSection section={section} setSection={setSection} setSelectedNote={setSelectedNote}/>,
    }


    return (
        <div className="app">
            { ROUTES[section] }
        </div>
    )
}