import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './VCard.css';

const VolunteerCard = (props) => {
  const { _id, title, img } = props.volunteer;

  const rand = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
  console.log(rand);
  const colors = [
    '#F4E353',
    '#27AE60',
    '#CD6155',
    '#138D75',
    '#515A5A',
    '#BB8FCE',
  ];

  const myColor = colors[rand];

  return (
    <Col xs={3}>
      <Link className='cardLink' to={`/register/${_id}`}>
        <Card
          style={{
            width: '15rem',
          }}
          className=' mt-5'
        >
          <Card.Img variant='top' src={require('../../images/' + img)} />
          <Card.Body style={{ backgroundColor: myColor }}>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default VolunteerCard;
