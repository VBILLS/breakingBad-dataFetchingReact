import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.css';

function Header() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleDropdown = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className='header'>
      <h1 className='header-title'>Breaking Bad API</h1>
      <div
        className={openLinks ? 'x header-navigation' : 'header-navigation'}
        onClick={toggleDropdown}
      >
        <div className='header-bar-1'></div>
        <div className='header-bar-2'></div>
        <div className='header-bar-3'></div>
      </div>
      {openLinks && (
        <div className='links-dropdown'>
          <ul className='charlinks-ul'>
            <li className='charlink-li' onClick={toggleDropdown}>
              <Link to='/characters/search'>Search Characters</Link>
            </li>
            <li className='charlink-li' onClick={toggleDropdown}>
              <Link to='/characters/random'>Random</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
