import Header from '../componants/Header';
import '../styles/Menu.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Menu(){

    const [showEditPlace, setShowEditPlace] = useState(true);
  const [showEditProfil, setShowEditProfil] = useState(false);

  const toggleDisplay = () => {
    setShowEditPlace(!showEditPlace);
    setShowEditProfil(!showEditProfil);
  };

    return(
        <div className="menu">
                        <Header />
            <div className="menuContent">
                <div className='placeProfil'>
                    <button className='menuButton' onClick={toggleDisplay}>Place</button>
                    <button className='menuButton' onClick={toggleDisplay}>Profil</button>
                </div>
                <div className='edit'>
                {showEditPlace && (
                    <div className='editPlace'>
                        <h1>Establishement <Link to="/Settings">
                            X
                        </Link>
                        </h1>
                            <div className='addPlace'>
                                <h2>PlaceTitle</h2>
                                <p>linktotheplace</p>
                                <button className='editButton'>Edit menu</button>
                            </div>
                                <div className='help'>
                                    <p>If you need help, please let us know.</p>
                                    <p>Our contacts :</p>
                                </div>
                    </div>
                )}
                          {showEditProfil && (
                    <div className='editProfil'>
                        <h1>Profile</h1>
                        <div className='editProfilContent'>
                            <div className='userData'>
                                <h2>User's data</h2>
                                <form className='profilForm' action="">
                                    <label htmlFor="">Name</label>
                                    <input className='profilInput' type="text" />
                                    <label htmlFor="">Email</label>
                                    <input className='profilInput' type="text" />
                                    <button className='profilButton' type='submit'>Save changes</button>
                                </form>
                            </div>
                            <div className='changePassword'>
                                <h2>Change password</h2>
                                <form className='profilForm' action="">
                                    <label htmlFor="">New password</label>
                                    <input className='profilInput' type="text" />
                                    <label htmlFor="">Repeat new password</label>
                                    <input className='profilInput' type="text" />
                                    <button className='profilButton' type='submit'>Change password</button>
                                </form>
                            </div>
                        </div>
                            <button className='logoutButton' >Logout</button>
                            Footer?
                    </div>
                          )}
                </div>
            </div>
        </div>
    )
}

export default Menu;