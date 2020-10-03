import React from 'react';
import { Card, Col } from 'react-bootstrap';

const VolunteerCard = (props) => {
  const { title, img } = props.volunteer;
  return (
    <Col xs={3}>
      <Card style={{ width: '15rem' }} className='pl-1 mt-5'>
        <Card.Img variant='top' src={require('../../images/' + img)} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default VolunteerCard;
