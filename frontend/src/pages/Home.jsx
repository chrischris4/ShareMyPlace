import Header from '../componants/Header';
import { useState } from 'react';
import '../styles/Home.css'
import { useTranslation } from 'react-i18next';


function Home(){
    const { t } = useTranslation();

    const [showSignUp, setShowSignUp] = useState(false);
    const [showSignUpPlace, setShowSignUpPlace] = useState(false);
  
    const showSignUpSection = () => {
      setShowSignUp(!showSignUp);
      setShowSignUpPlace(false);
    };
    const showSignUpPlaceSection = () => {
        setShowSignUpPlace(!showSignUpPlace);
        setShowSignUp(false);
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
                                    <button type='button' className='signUpButton' onClick={showSignUpPlaceSection}>Add your place</button>
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
                                    <select>
                                        <option value=""></option>
                                        <option value="restaurant">Restaurant</option>
                                        <option value="market">Market</option>
                                    </select>
                                    <label htmlFor="">Currency</label>
                                    <select>
                                        <option value=""></option>
                                        <option value="euro">€</option>
                                        <option value="dollar">$</option>
                                    </select>
                                    <label htmlFor="">Main language</label>
                                    <select>
                                        <option value=""></option>
                                        <option value="fr">Francais</option>
                                        <option value="en">English</option>
                                    </select>
                                    <button className='addPlaceButton'>Create Place</button>
                                </form>
                            </div>
                        </div>
            <div className="homeContent">
                <div className="homeAbout">
                    <h1>
                        QR Code Menu,
                    </h1>
                    <p>{t('homeTitle')}</p>
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