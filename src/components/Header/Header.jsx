import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.styles.scss';

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      className='header'
      bg='primary'
      variant='light'
    >
      <Navbar.Brand className='header-title'>Breaking Bad Api</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <NavDropdown
            title='Characters'
            href='/characters'
            id='collasible-nav-dropdown-characters'
          >
            <NavDropdown.Item as={Link} href='/characters/search'>
              Search
            </NavDropdown.Item>
            <NavDropdown.Item href='/characters/random'>
              Random
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title='Episodes'
            href='/episodes'
            id='collasible-nav-dropdown-wpisodes'
          >
            <NavDropdown.Item href='#'></NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title='Quotes'
            id='collasible-nav-dropdown-quotes'
          ></NavDropdown>
          <NavDropdown title='Deaths' id='collasible-nav-dropdown-deaths'>
            <Nav.Link href='#deets'>More deets</Nav.Link>
            <Nav.Link eventKey={2} href='#memes'>
              Dank memes
            </Nav.Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
