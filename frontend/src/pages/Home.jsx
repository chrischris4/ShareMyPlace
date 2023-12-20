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

      const closeSignUpModal = (e) => {
        if (e.target.classList.contains('signUpOverlay')|| e.target.classList.contains('closeIcon')) {
          showSignUpSection(); // Fermer la modal signup
        }
      };

      const closeSignUpPlaceModal = (e) => {
        if (e.target.classList.contains('signUpPlaceOverlay')){
          showSignUpPlaceSection(); // Fermer la modal signupPlace
        }
      };


    return(
        <div className="home">
                        <Header />
                        <div className='signUpOverlay' onClick={closeSignUpModal} style={{ display: showSignUp ? 'flex' : 'none' }}>
                            <div className='signUpContent'>
                                <div className='signUpTitle'>
                                <h2>{t('signUpTitle')}</h2>
                                <span className="material-symbols-rounded closeIcon" onClick={closeSignUpModal}>
                                close
                                </span>
                                </div>
                                <form action="">
                                    <label htmlFor="">{t('signUpName')}</label>
                                    <input type="text" required/>
                                    <label htmlFor="">{t('signUpMail')}</label>
                                    <input type="text" required/>
                                    <label htmlFor="">{t('signUpPassword')}</label>
                                    <input type="text" required/>
                                    <div className='signUpSaveData'>
                                    <input className='inputCheckbox' type="checkbox" required/> {t('signUpSaveData')}
                                    </div>
                                    <button type='button' className='signUpButton' onClick={showSignUpPlaceSection}>{t('signUpButton')}</button>
                                </form>
                            </div>
                        </div>
                        <div className='signUpPlaceOverlay' onClick={closeSignUpPlaceModal} style={{ display: showSignUpPlace ? 'flex' : 'none' }}>
                            <div className='signUpPlaceContent'>
                                <div className='signUpPlaceTitle'>
                                <h2>{t('signUpPlaceTitle')}</h2>
                                <span className="material-symbols-rounded goBackIcon" onClick={showSignUpSection}>
                                keyboard_backspace
                                </span>
                                </div>
                                <form action="">
                                    <label htmlFor="">{t('signUpPlaceName')}</label>
                                    <input className='inputPlaceName' type="text" required/>
                                    <p className='inputPlaceP'>shareyourplace.com/p/blebleble</p>
                                    <label htmlFor="">{t('signUpPlaceType')}</label>
                                    <select required>
                                        <option value=""></option>
                                        <option value="restaurant">{t('signUpPlaceTypeRestaurant')}</option>
                                        <option value="market">{t('signUpPlaceTypeMarket')}</option>
                                    </select>
                                    <label htmlFor="">{t('signUpPlaceCurrency')}</label>
                                    <select required>
                                        <option value=""></option>
                                        <option value="euro">€</option>
                                        <option value="dollar">$</option>
                                    </select>
                                    <label htmlFor="">{t('signUpPlaceLanguage')}</label>
                                    <select required>
                                        <option value=""></option>
                                        <option value="fr">Francais</option>
                                        <option value="en">English</option>
                                    </select>
                                    <button className='addPlaceButton'>{t('signUpPlaceButton')}</button>
                                </form>
                            </div>
                        </div>
            <div className="homeContent">
                <div className="homeAbout">
                    <h1>
                    {t('homeH1')}
                    </h1>
                    <p>{t('homeP')}</p>
                    <div className="homeButtons">
                        <button className="homeButton" onClick={showSignUpSection}>{t('homeExempleButton')}</button>
                        <button className="homeButton">{t('homeQRCodeButton')}</button>
                    </div>
                </div>
                <div className="homeImage">
                </div>
            </div>
        </div>
    )
}

export default Home;