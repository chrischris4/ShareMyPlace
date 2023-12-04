import '../styles/Header.css'

function Header(){
    return(
        <div className="header">
            <div className="headerContent">
                <h1 className='headerTitle' >Share My Place</h1>
                <nav>
                    <ul className='headerUl'>
                    <li>Menu Exemples</li>
                    <li>Blog</li>
                    <li>Contacts</li>
                    </ul>
                </nav>
                <div className="loginCreate">
                    <p>Login</p>
                    <button className='headerButton' >Create menu</button>
                </div>
            </div>
        </div>
    )
}

export default Header;