import React, { useState, useContext } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

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
    <div>
      {user.isSignIn ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => googleSignIn()}>Sign In</button>
      )}

      {user.isSignIn && <p>{user.name}</p>}
    </div>
  );
};

export default Login;
