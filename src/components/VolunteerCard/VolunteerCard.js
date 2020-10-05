import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './VCard.css';

const VolunteerCard = (props) => {
  const { _id, title, img } = props.volunteer;
  return (
    <Col xs={3} sm={12}>
      <Link className='cardLink' to={`/register/${_id}`}>
        <Card
          style={{
            width: '15rem',
          }}
          className=' mt-5'
        >
          <Card.Img variant='top' src={require('../../images/' + img)} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default VolunteerCard;
