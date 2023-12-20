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
                                <h2>{t('signUpTitle')}</h2>
                                <form action="">
                                    <label htmlFor="">{t('signUpName')}</label>
                                    <input type="text" />
                                    <label htmlFor="">{t('signUpMail')}</label>
                                    <input type="text" />
                                    <label htmlFor="">{t('signUpPassword')}</label>
                                    <input type="text" />
                                    <input type="checkbox" />
                                    <button type='button' className='signUpButton' onClick={showSignUpPlaceSection}>{t('signUpButton')}</button>
                                </form>
                            </div>
                        </div>
                        <div className='signUpPlace' style={{ display: showSignUpPlace ? 'flex' : 'none' }}>
                            <div className='signUpPlaceContent'>
                                <h2>{t('signUpPlaceTitle')}</h2>
                                <form action="">
                                    <label htmlFor="">{t('signUpPlaceName')}</label>
                                    <input type="text" />
                                    <p>shareyourplace.com/p/blebleble</p>
                                    <label htmlFor="">{t('signUpPlaceType')}</label>
                                    <select>
                                        <option value=""></option>
                                        <option value="restaurant">{t('signUpPlaceTypeRestaurant')}</option>
                                        <option value="market">{t('signUpPlaceTypeMarket')}</option>
                                    </select>
                                    <label htmlFor="">{t('signUpPlaceCurrency')}</label>
                                    <select>
                                        <option value=""></option>
                                        <option value="euro">€</option>
                                        <option value="dollar">$</option>
                                    </select>
                                    <label htmlFor="">{t('signUpPlaceLanguage')}</label>
                                    <select>
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