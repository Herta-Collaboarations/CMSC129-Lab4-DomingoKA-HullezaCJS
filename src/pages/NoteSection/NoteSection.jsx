import './NoteSection.css'
import addHerta from './../../assets/add-herta.webp';
import editHerta from './../../assets/edit-herta.webp';
import createNote from './../../utils/createNote'
import { useState } from 'react';

export default function NoteSection( { section, setSection }) {
     const IMAGE_ROUTES = {
        "add": addHerta,
        "edit": editHerta
    }

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    async function addNote() {
        const {status, body} = await createNote({'title': title, 'content': content});
        console.log(status, body);
        if (status === 201) setSection("home");
    }

    const MESSAGE_ROUTES = {
        "add": "Do you want to save this note?",
        "edit": "Do you want to keep the changes in this note?" 
    }

     const BUTTON_ROUTES = {
        "add" : (
           <div className='button-container'>
            <button className='secondary-button' onClick={() => setSection("home")}>Cancel</button>                        
            <button className='primary-button' onClick={addNote}>Save</button>
        </div>
        ), 
        "edit": (
            <div className='button-container'>
                <button className='secondary-button' onClick={() => setSection("home")}>Cancel</button>
                <button className='primary-button'>Save</button>
            </div>
        )    
    }
    
    return (
        <main className='note-section'>
            <div className='note-container'>
                <div className='note'>
                    <input 
                        type='text' 
                        placeholder='Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder='Description'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
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