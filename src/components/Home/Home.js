import React, { useEffect, useState } from 'react';
import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from 'react-bootstrap';
import VolunteerCard from '../VolunteerCard/VolunteerCard';
import fakeData from './../../fakeData/index';

const Home = () => {
  const [volunteers, setVolunteers] = useState([]);

  //   const handleAddVolunteer = () => {
  //     fetch('http://localhost:5000/addVolunteer', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(fakeData),
  //     });
  //   };

  useEffect(() => {
    fetch('http://localhost:5000/volunteers')
      .then((res) => res.json())
      .then((data) => setVolunteers(data));
  }, []);

  return (
    <div>
      <Container>
        {/* <Button onClick={handleAddVolunteer}> Add Volunteer </Button> */}

        <h3 className='text-center mt-5'>
          I GROW BY HELPING PEOPLE IN NEEDED.
        </h3>
        <Form inline className='justify-content-md-center pt-3'>
          <InputGroup>
            <FormControl
              placeholder='Search....'
              aria-label='Serach'
              aria-describedby='basic-addon1'
            />
            <InputGroup.Prepend>
              <InputGroup.Text
                style={{ backgroundColor: '#3f90fc', color: 'white' }}
                id='basic-addon1'
              >
                Search
              </InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
        </Form>
      </Container>
      <Container className='mt-5'>
        <Row>
          {volunteers.map((volunteer) => (
            <VolunteerCard
              key={volunteer._id}
              volunteer={volunteer}
            ></VolunteerCard>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
