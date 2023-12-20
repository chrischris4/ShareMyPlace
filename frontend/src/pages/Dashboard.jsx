import Header from '../componants/Header';
import '../styles/Dashboard.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



function Dashboard(){
    const { t } = useTranslation();

    const [showEditPlace, setShowEditPlace] = useState(true);
  const [showEditProfil, setShowEditProfil] = useState(false);

  const toggleDisplay = (section) => {
    if (section === 'place') {
      setShowEditPlace(true);
      setShowEditProfil(false);
    } else if (section === 'profil') {
      setShowEditPlace(false);
      setShowEditProfil(true);
    }
  };

    return(
        <div className="dashboard">
                        <Header />
            <div className="dashboardContent">
                <div className='placeProfil'>
                    <button className='dashboardButton' onClick={() => toggleDisplay('place')}>{t('dashboardPlace')}</button>
                    <button className='dashboardButton' onClick={() => toggleDisplay('profil')}>{t('dashboardProfil')}</button>
                </div>
                <div className='edit'>
                {showEditPlace && (
                    <div className='editPlace'>
                        <div className='editPlaceTitle'>
                        <h1>{t('dashboardPlaceTitle')}</h1>
                        <Link to="/Settings">
                            <span className="material-symbols-outlined settingsIcon">
                                settings
                            </span>
                        </Link>
                        </div>
                            <div className='addPlace'>
                                <h2>PlaceTitle</h2>
                                <p>linktotheplace</p>
                                <button className='editMenuButton'>{t('dashboardPlaceButton')}<span className="material-symbols-rounded editIcon">
edit_square
</span></button>
                            </div>
                                <div className='help'>
                                    <p>{t('dashboardPlaceHelp')}</p>
                                    <p>{t('dashboardPlaceContact')}</p>
                                </div>
                    </div>
                )}
                          {showEditProfil && (
                    <div className='editProfil'>
                        <h1>{t('dashboardProfilTitle')}</h1>
                        <div className='editProfilContent'>
                            <div className='userData'>
                                <h2>{t('dashboardProfilUserData')}</h2>
                                <form className='profilForm' action="">
                                    <label htmlFor="">{t('dashboardProfilUserName')}</label>
                                    <input className='profilInput' type="text" />
                                    <label htmlFor="">{t('dashboardProfilUserMail')}</label>
                                    <input className='profilInput' type="text" />
                                    <button className='profilButton' type='submit'>{t('dashboardProfilUserButton')}</button>
                                </form>
                            </div>
                            <div className='changePassword'>
                                <h2>{t('dashboardProfilPassword')}</h2>
                                <form className='profilForm' action="">
                                    <label htmlFor="">{t('dashboardProfilPasswordNew')}</label>
                                    <input className='profilInput' type="text" />
                                    <label htmlFor="">{t('dashboardProfilPasswordNewRepeat')}</label>
                                    <input className='profilInput' type="text" />
                                    <button className='profilButton' type='submit'>{t('dashboardProfilPasswordButton')}</button>
                                </form>
                            </div>
                        </div>
                            <button className='logoutButton' >{t('dashboardProfilLogout')}</button>
                            Footer?
                    </div>
                          )}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;