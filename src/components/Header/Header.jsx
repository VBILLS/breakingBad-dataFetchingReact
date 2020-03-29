import React, { useState } from 'react';

import './Header.styles.css';

function Header() {
  const [openLinks, setOpenLinks] = useState(false);

  const handleDropdown = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className='header'>
      <h1 className='header-title'>Breaking Bad API</h1>
      <div className='header-navigation' onClick={handleDropdown}>
        <div className='header-bar-1'></div>
        <div className='header-bar-2'></div>
        <div className='header-bar-3'></div>
      </div>
      {openLinks && <div className='links-dropdown'>Links Go Here</div>}
    </div>
  );
}

export default Header;
