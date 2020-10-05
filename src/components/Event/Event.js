import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import './Event.css';

const Event = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    fetch('https://cryptic-inlet-22709.herokuapp.com/addVolunteer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          history.push('/home');
        }
      });
  };

  return (
    <div
      style={{ backgroundColor: '#f8fafc', minHeight: '560px' }}
      className='pl-4 pt-4'
    >
      <h5>Add Event</h5>
      <form className='formWidth' onSubmit={handleSubmit(onSubmit)}>
        <div className='eventForm'>
          <Row>
            <Col xs={6}>
              <input
                name='title'
                ref={register({ required: true })}
                placeholder='Event Title'
              />
            </Col>
            <Col xs={6}>
              <input
                name='date'
                ref={register({ required: true })}
                placeholder='dd-mm-yyyy'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={6} className='pt-3 pl-4'>
              <textarea
                name='description'
                ref={register({ required: true })}
                placeholder='Description'
              />
            </Col>
            <Col xs={6}>
              <input
                type='file'
                ref={register({ required: false })}
                placeholder='Image'
              />
              <input
                hidden
                name='img'
                ref={register({ required: true })}
                placeholder='Image'
                defaultValue='defaultImg.png'
              />
            </Col>
          </Row>
        </div>
        <input
          className='float-right submitBtn'
          style={{ backgroundColor: '#3f90fc', color: 'white' }}
          type='submit'
          value='Submit'
        />
      </form>
    </div>
  );
};

export default Event;
