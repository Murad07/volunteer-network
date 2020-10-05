import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './SingleVolunteer.css';

const SingleVolunteer = (props) => {
  const { _id, date, img, volunteerTitle } = props.info;
  const history = useHistory();

  const handleCancle = () => {
    fetch(`https://cryptic-inlet-22709.herokuapp.com/delete/${_id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          history.push('/redirectDelete');
        }
      });
  };

  return (
    <Col xs={6} sm={12}>
      <div className='registerCard px-2 mt-4 py-2'>
        <Row>
          <Col xs={4}>
            <img
              className='d-block mx-auto my-1'
              height='120'
              src={require('../../images/' + img)}
              alt='Volunteer Image'
            />
          </Col>
          <Col xs={8}>
            <h4>{volunteerTitle}</h4>
            <h5>{date}</h5>
            <Button
              onClick={handleCancle}
              className='float-right'
              variant='secondary'
            >
              Cancle
            </Button>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default SingleVolunteer;
