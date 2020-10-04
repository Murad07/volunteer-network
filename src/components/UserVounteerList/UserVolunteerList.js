import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleVolunteer from '../SingleVolunteer/SingleVolunteer';
import { UserContext } from './../../App';

const UserVolunteerList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [userVolunteerList, setUserVolunteerList] = useState([]);

  const email = loggedInUser.email;

  useEffect(() => {
    fetch('http://localhost:5000/userRegisterList/' + email)
      .then((res) => res.json())
      .then((data) => setUserVolunteerList(data));
  }, []);

  console.log(userVolunteerList);
  return (
    <Container>
      <Row>
        {userVolunteerList.length &&
          userVolunteerList.map((singleCard) => (
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