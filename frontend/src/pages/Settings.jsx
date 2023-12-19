import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Settings.css';

function Settings() {
  const [showComponents, setShowComponents] = useState(true);
  const [showQRcode, setShowQRcode] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [showBilling, setShowBilling] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  const handleNavItemClick = (section) => {
    // Update state based on the clicked navigation item
    switch (section) {
      case 'Components':
        setShowComponents(true);
        setShowQRcode(false);
        setShowTeam(false);
        setShowBilling(false);
        setShowSupport(false);
        break;
      case 'QRcode':
        setShowComponents(false);
        setShowQRcode(true);
        setShowTeam(false);
        setShowBilling(false);
        setShowSupport(false);
        break;
      case 'Team':
        setShowComponents(false);
        setShowQRcode(false);
        setShowTeam(true);
        setShowBilling(false);
        setShowSupport(false);
        break;
      case 'Billing':
        setShowComponents(false);
        setShowQRcode(false);
        setShowTeam(false);
        setShowBilling(true);
        setShowSupport(false);
        break;
      case 'Support':
        setShowComponents(false);
        setShowQRcode(false);
        setShowTeam(false);
        setShowBilling(false);
        setShowSupport(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="settingsMain">
      <div className="settings">
        <div className="settingsNav">
          <h1>PlaceName</h1>
          <p>CreationDate</p>
          <button className="editMenuButton">Edit menu</button>
          <ul className="settingsNavUl">
            <li onClick={() => handleNavItemClick('Components')}>Components</li>
            <li onClick={() => handleNavItemClick('QRcode')}>QR code</li>
            <li onClick={() => handleNavItemClick('Team')}>Team</li>
            <li onClick={() => handleNavItemClick('Billing')}>Billing</li>
            <li onClick={() => handleNavItemClick('Support')}>Support</li>
          </ul>
          <Link to="/Dashboard">X</Link>
        </div>
        <div className='settingsContent'>
        <div className='settingsEditPlace'>
                        <p>PlaceName</p>
                    <div className='settingsEditPlaceProfil'>
                        <p>Nom du propriétaire</p>
                        <p>Propriétaire</p>
                    </div>
                    </div>
          {showComponents && (
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
          )}
          {showQRcode && (
            <div className="settingsQRcode">
              <h2>QR code</h2>
            </div>
          )}
          {showTeam && (
            <div className="settingsTeam">
              <h2>Team</h2>
            </div>
          )}
          {showBilling && (
            <div className="settingsBilling">
              <h2>Billing</h2>
            </div>
          )}
          {showSupport && (
            <div className="settingsSupport">
              <h2>Support</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;

