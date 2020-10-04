import React from 'react';
import { Col } from 'react-bootstrap';
import './SingleVolunteer.css';

const SingleVolunteer = (props) => {
  const { _id, date, volunteerTitle } = props.info;
  return (
    <Col xs={6}>
      <div className='registerCard'>
        <h4>{volunteerTitle}</h4>
        <h5>{date}</h5>
      </div>
    </Col>
  );
};

export default SingleVolunteer;
