import '../styles/Header.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Header(){
    const { t } = useTranslation();

    return(
        <div className="header">
            <div className="headerContent">
                <h1 className='headerTitle' >Share My Place</h1>
                <nav>
                    <ul className='headerUl'>
                    <li>{t('headerExemple')}</li>
                    <li>Blog</li>
                    <li>Contacts</li>
                    </ul>
                </nav>
                <div className="loginCreate">
                <Link to="/Dashboard">
                <p>{t('headerLogin')}</p>
                        </Link>
                    <button className='headerButton' >{t('headerButton')}</button>
                </div>
            </div>
        </div>
    )
}

export default Header;