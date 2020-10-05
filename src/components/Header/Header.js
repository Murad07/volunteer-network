import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../logos/brandLogo.png';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <Container>
      <Navbar expand='lg'>
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
            <Link className='navButton' to='/login'>
              Donation
            </Link>
            <Link className='navButton' to='/userVolunteerList'>
              Events
            </Link>
            <Link className='navButton' to='/'>
              Blog
            </Link>
            <Link to='/login'>
              <Button className='mr-2' variant='primary'>
                Register
              </Button>
            </Link>
            <Link to='/admin'>
              <Button variant='dark'>Admin</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
