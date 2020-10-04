import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Register.css';
import logo from '../../logos/brandLogo.png';
import { useForm } from 'react-hook-form';

const Register = () => {
  const { register, handleSubmit } = useForm();
  let { title } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const onSubmit = (data) => {
    console.log('form submit', data);

    fetch('http://localhost:5000/addRegister', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          //   processOrder();
          alert('order placed successfully');
        }
      });
  };

  return (
    <Container style={{ backgroundColor: '#f8fafc', height: '560px' }}>
      <Row className='justify-content-md-center'>
        <Col xs={12} sm={4} md={4} className='m-auto'>
          <img
            className='d-block mx-auto my-3'
            height='60'
            src={logo}
            alt='Brand Loge'
          />
        </Col>
      </Row>

      <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
        <h4 className='text-center'>Register as a Volunteer</h4>
        <input
          name='name'
          defaultValue={loggedInUser.name}
          ref={register({ required: true })}
          placeholder='Full Name'
        />

        <input
          name='email'
          defaultValue={loggedInUser.email}
          ref={register({ required: true })}
          placeholder='User Name or Email'
        />

        <input
          name='date'
          ref={register({ required: true })}
          placeholder='Date'
        />

        <input
          name='description'
          ref={register({ required: true })}
          placeholder='Description'
        />

        <input
          name='volunteerTitle'
          ref={register({ required: true })}
          placeholder='Volunteer Title'
          defaultValue={title}
        />

        <input
          style={{ backgroundColor: '#3f90fc', color: 'white' }}
          type='submit'
          value='Register'
        />
      </form>
    </Container>
  );
};

export default Register;
