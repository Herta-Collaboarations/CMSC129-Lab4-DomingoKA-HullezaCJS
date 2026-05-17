import './HomeSection.css'
import homeHerta from './../../assets/home-herta.webp';
import deleteHerta from './../../assets/delete-herta.webp';
import editIcon from './../../assets/icons/edit.png';
import deleteIcon from './../../assets/icons/delete.png';

export default function HomeSection({ section, setSection }) {
    const IMAGE_ROUTES = {
        "home": homeHerta,
        "delete": deleteHerta
    }
    
    const MESSAGE_ROUTES = {
        "home": "Do you want to add a note?",
        "delete": "Are you sure you want to delete?" 
    }

    const BUTTON_ROUTES = {
        "home" : (
            <div className='button-container'>
                <button className='primary-button' onClick = {() => setSection("add")}>Add</button>
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
                <div className='note'>
                    <div className='note-header'>
                        <h3>Note Title</h3>
                        <div className='utils'>
                            <img src={editIcon} onClick={() => setSection("edit")}/>
                            <img src={deleteIcon} onClick={() => setSection("delete")}/>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat metus eu lectus convallis, a ultrices est tempor. Curabitur viverra nisl vehicula, posuere quam vitae, euismod nulla. Nunc ut velit venenatis, imperdiet velit sit amet, ultricies est. Maecenas risus ante, congue id eros sit amet, molestie consequat purus. Sed vitae diam sed ligula feugiat porta at non tortor. Duis urna est, consequat eget hendrerit gravida, ullamcorper ut velit.</p>
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