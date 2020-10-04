import React, { useState, useContext } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/brandLogo.png';
import googleImg from '../../logos/google.png';
import './Login.css';
import { Col, Container, Row } from 'react-bootstrap';

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [user, setUser] = useState({
    isSignIn: false,
    name: '',
    email: '',
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: '/' } };

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const googleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, email } = res.user;
        const signInUser = {
          isSignIn: true,
          name: displayName,
          email: email,
        };
        console.log(res);
        setUser(signInUser);
        setLoggedInUser(signInUser);
        history.replace(from);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const signOutUser = {
          isSignIn: false,
          name: '',
          email: '',
        };
        setUser(signOutUser);
        setLoggedInUser(signOutUser);
      })
      .catch((err) => {
        // An error happened.
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
      <div className='login-form'>
        <div className='mx-auto'>
          <h5 className='text-center'>Login With</h5>
          <div className='pt-3'>
            <button onClick={googleSignIn} className='socialBtn'>
              <img
                src={googleImg}
                height='25'
                width='25'
                alt=''
                className='mr-5'
              />
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
