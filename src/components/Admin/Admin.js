import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AllVolunteerList from '../AllVolunteerList/AllVolunteerList';
import Event from '../Event/Event';
import './Admin.css';
import userImg from '../../logos/users.png';
import plus from '../../logos/plus.png';

const Admin = () => {
  const [isList, setIsList] = useState(true);

  const callVolunteerList = () => {
    setIsList(true);
  };

  const callEvent = () => {
    setIsList(false);
  };
  return (
    <Container>
      <Row>
        <Col xs={2} className='p-0 mt-5'>
          <Link className='navButton' onClick={callVolunteerList}>
            <img src={userImg} height='20' className='pr-1 pb-1' alt='' />
            Volunteer Register List
          </Link>{' '}
          <br></br>
          <Link className='navButton' onClick={callEvent}>
            <img src={plus} height='20' className='pr-1 pb-1' alt='' />
            Add Event
          </Link>
        </Col>
        <Col>
          {isList ? <AllVolunteerList></AllVolunteerList> : <Event></Event>}
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
