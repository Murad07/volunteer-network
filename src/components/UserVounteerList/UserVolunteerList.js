import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleVolunteer from '../SingleVolunteer/SingleVolunteer';
import { UserContext } from './../../App';

const UserVolunteerList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [userVolunteerList, setUserVolunteerList] = useState([]);

  const email = loggedInUser.email;

  useEffect(() => {
    fetch('https://cryptic-inlet-22709.herokuapp.com/userRegisterList/' + email)
      .then((res) => res.json())
      .then((data) => setUserVolunteerList(data));
  }, []);

  return (
    <Container
      style={{ backgroundColor: '#f8fafc', minHeight: '500px' }}
      className='px-5'
    >
      <Row className='pb-4'>
        {userVolunteerList.map((singleCard) => (
          <SingleVolunteer
            key={singleCard._id}
            info={singleCard}
          ></SingleVolunteer>
        ))}
      </Row>
    </Container>
  );
};

export default UserVolunteerList;
