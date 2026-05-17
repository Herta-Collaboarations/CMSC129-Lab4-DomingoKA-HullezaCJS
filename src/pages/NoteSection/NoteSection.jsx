import './NoteSection.css'
import addHerta from './../../assets/add-herta.webp';
import editHerta from './../../assets/edit-herta.webp';

export default function NoteSection( { section, setSection }) {
     const IMAGE_ROUTES = {
        "add": addHerta,
        "edit": editHerta
    }
    
    const MESSAGE_ROUTES = {
        "add": "Do you want to save this note?",
        "edit": "Do you want to keep the changes in this note?" 
    }

     const BUTTON_ROUTES = {
        "add" : (
           <div className='button-container'>
            <button className='secondary-button' onClick={() => setSection("home")}>Cancel</button>                        
            <button className='primary-button'>Save</button>
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
                    <input type='text' placeholder='Title'/>
                    <textarea placeholder='Description'/>
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