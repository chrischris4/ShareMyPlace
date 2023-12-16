import Header from '../componants/Header';
import { useState } from 'react';
import '../styles/Home.css'

function Home(){
    const [showSignUp, setShowSignUp] = useState(false);
    const [showSignUpPlace, setShowSignUpPlace] = useState(false);
  
    const showSignUpSection = () => {
      setShowSignUp(!showSignUp);
      setShowSignUpPlace(false);
    };
    return(
        <div className="home">
                        <Header />
                        <div className='signUp' style={{ display: showSignUp ? 'flex' : 'none' }}>
                            <div className='signUpContent'>
                                <h2>Sign Up</h2>
                                <form action="">
                                    <label htmlFor="">Your name</label>
                                    <input type="text" />
                                    <label htmlFor="">Email</label>
                                    <input type="text" />
                                    <label htmlFor="">Password</label>
                                    <input type="text" />
                                    <input type="checkbox" />
                                    <button className='signUpButton'>Add your place</button>
                                </form>
                            </div>
                        </div>
                        <div className='signUpPlace' style={{ display: showSignUpPlace ? 'flex' : 'none' }}>
                            <div className='signUpPlaceContent'>
                                <h2>Add Your Place</h2>
                                <form action="">
                                    <label htmlFor="">Place name</label>
                                    <input type="text" />
                                    <label htmlFor="">Short name in URL</label>
                                    <input type="text" />
                                    <p>shareyourplace.com/p/blebleble</p>
                                    <label htmlFor="">Place type</label>
                                    <input type="text" />
                                    <label htmlFor="">Currency</label>
                                    <input type="text" />
                                    <label htmlFor="">Main language</label>
                                    <input type="text" />
                                    <button className='addPlaceButton'>Create Place</button>
                                </form>
                            </div>
                        </div>
            <div className="homeContent">
                <div className="homeAbout">
                    <h1>
                        QR Code Menu,
                    </h1>
                    <p>that works for you</p>
                    <div className="homeButtons">
                        <button className="homeButton" onClick={showSignUpSection}>Menu example</button>
                        <button className="homeButton">Create QR menu</button>
                    </div>
                </div>
                <div className="homeImage">
                </div>
            </div>
        </div>
    )
}

export default Home;