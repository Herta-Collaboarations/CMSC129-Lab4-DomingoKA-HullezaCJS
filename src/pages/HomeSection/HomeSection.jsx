import './HomeSection.css'
import homeHerta from './../../assets/home-herta.webp';
import deleteHerta from './../../assets/delete-herta.webp';
import editIcon from './../../assets/icons/edit.png';
import deleteIcon from './../../assets/icons/delete.png';
import getAllNotes from './../../utils/getAllNotes';
import { useEffect, useState } from 'react';

export default function HomeSection({ section, setSection }) {
    const IMAGE_ROUTES = {
        "home": homeHerta,
        "delete": deleteHerta
    }
    
    const MESSAGE_ROUTES = {
        "home": "Do you want to add a note?",
        "delete": "Are you sure you want to delete?" 
    }

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        async function fetchNotes() {
            const { status, body } = await getAllNotes();
            if (status === 200) setNotes(body.toReversed());
        }
        fetchNotes();
    }, [section]);

    const BUTTON_ROUTES = {
        "home" : (
            <div className='button-container'>
                <button className='primary-button' onClick={() => setSection("add")}>Add</button>
            </div>
        ), 
        "delete": (
            <div className='button-container'>
                <button className='secondary-button' onClick={() => setSection("home")}>Cancel</button>
                <button className='primary-button'>Delete</button>
            </div>
        )    
    }

    return (
        <main className='home-section'>
            <div className='note-list'>
                { notes.map((note) => (
                    <div className='note' key={note.id}>
                        <div className='note-header'>
                            <h3>{note.title}</h3>
                            <div className='utils'>
                                <img src={editIcon} onClick={() => setSection("edit")}/>
                                <img src={deleteIcon} onClick={() => setSection("delete")}/>
                            </div>
                        </div>
                        <p>{note.content}</p>
                    </div>
                ))}
            </div>
            <footer>
                <img src={IMAGE_ROUTES[section]}/>
                <div className='notif'>
                    <div>
                        <h3 className='character-name'>The Herta</h3>
                        <p className='message'>{MESSAGE_ROUTES[section]}</p>
                    </div>
                    { BUTTON_ROUTES[section] }
                </div>
            </footer>
        </main>
    );
}