import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import logo from '../../logos/brandLogo.png';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#home'>
          <img
            src={logo}
            height='30'
            className='d-inline-block align-top'
            alt='Brand Loge'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto '>
            <Link className='navButton' to='/home'>
              Home
            </Link>
            <Link className='navButton' to='/'>
              Donation
            </Link>
            <Link className='navButton' to='/login'>
              Events
            </Link>
            <Link className='navButton' to='/'>
              Blog
            </Link>
            <Button className='mr-2' variant='primary'>
              Register
            </Button>
            <Button variant='dark'>Admin</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;