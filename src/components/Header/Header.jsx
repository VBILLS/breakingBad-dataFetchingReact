import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Header.styles.scss';

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand='md'
      className='header'
      bg='brand'
      variant='dark'
    >
      <Navbar.Brand className='header-title'>Breaking Bad Api</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <NavDropdown
            title='Characters'
            id='collasible-nav-dropdown-characters'
          >
            <NavDropdown.Item href='/characters'>Main</NavDropdown.Item>
            <NavDropdown.Item href='/characters/search'>
              Search
            </NavDropdown.Item>
            <NavDropdown.Item href='/characters/random'>
              Random
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            title='Episodes'
            href='/episodes'
            id='collasible-nav-dropdown-wpisodes'
          >
            Episodes
          </Nav.Link>
          <Nav.Link
            title='Quotes'
            id='collasible-nav-dropdown-quotes'
            href='/quotes'
          >
            Quotes
          </Nav.Link>

          <Nav.Link
            title='Deaths'
            href='/deaths'
            id='collasible-nav-dropdown-deaths'
          >
            Deaths
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
