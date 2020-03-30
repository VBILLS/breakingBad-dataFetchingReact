import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Collapse from 'react-bootstrap/Collapse';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.styles.css';

function Header() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleDropdown = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      className='header'
      bg='primary'
      variant='dark'
    >
      <Navbar.Brand>Breaking Bad Api</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <NavDropdown title='Characters' href='/characters'>
            <NavDropdown.Item href='/characters/search'>
              Search
            </NavDropdown.Item>
            <NavDropdown.Item href='/characters/random'>
              Random
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='Episodes' href='/episodes'>
            <NavDropdown.Item href='#'></NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='Quotes' id='collasible-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='Deaths'>
            <Nav.Link href='#deets'>More deets</Nav.Link>
            <Nav.Link eventKey={2} href='#memes'>
              Dank memes
            </Nav.Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    // {/* <Navbar fixed='top' className='header' bg='primary'>
    //   <Navbar.Brand className='header-title'>Breaking Bad API</Navbar.Brand>
    //   {/* <div
    //     className={openLinks ? 'x header-navigation' : 'header-navigation'}
    //     onClick={toggleDropdown}
    //   >
    //     <div className='header-bar-1'></div>
    //     <div className='header-bar-2'></div>
    //     <div className='header-bar-3'></div>
    //   </div> */}
    //   <Collapse in={openLinks} className='links-dropdown'>
    //     <div>
    //       <ul className='charlinks-ul'>
    //         <li className='charlink-li' onClick={toggleDropdown}>
    //           <Link to='/characters/search'>Search Characters</Link>
    //         </li>
    //         <li className='charlink-li' onClick={toggleDropdown}>
    //           <Link to='/characters/random'>Random</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </Collapse>
    // </Navbar> */}
  );
}

export default Header;
