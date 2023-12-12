import '../styles/Settings.css'
import { Link } from 'react-router-dom'

function Settings(){
    return(
        <div className="settingsMain">
            <div className="settings">
                <div className="settingsNav">
                    <h1>PlaceName</h1>
                    <p>CreationDate</p>
                    <button className="editMenuButton">Edit menu</button>
                    <ul className="settingsNavUl">
                        <li>Components</li>
                        <li>QR code</li>
                        <li>Team</li>
                        <li>Billing</li>
                        <li>Support</li>
                    </ul>
                    <Link to="/Menu">
                            X
                        </Link>
                </div>
                <div className='settingsContent'>
                    <div className='settingsEditPlace'>
                        <p>PlaceName</p>
                    <div className='settingsEditPlaceProfil'>
                        <p>OwnerName</p>
                        <p>Owner</p>
                    </div>
                    </div>
                <div className="settingsComponents">
                    <h2>Components</h2>
                    <div className="settingsComponentsContent">
                        <div className="add-ons">
                            <h3>Add-ons</h3>
                            <p>Add-ons for menu items</p>
                            <button className="settingsComponentsEdit">Edit</button>
                        </div>
                        <div className="add-ons">
                            <h3>Add-ons</h3>
                            <p>Add-ons for menu items</p>
                            <button className="settingsComponentsEdit">Edit</button>
                        </div>
                        <div className="add-ons">
                            <h3>Add-ons</h3>
                            <p>Add-ons for menu items</p>
                            <button className="settingsComponentsEdit">Edit</button>
                        </div>
                    </div>
                </div>
                <div className="settingsQRcode"></div>
                <div className="settingsTeam"></div>
                <div className="settingsBilling"></div>
                <div className="settingsSupport"></div>
                </div>
            </div>
        </div>
    )
}

export default Settings