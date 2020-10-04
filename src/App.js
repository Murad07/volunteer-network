import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import UserVolunteerList from './components/UserVounteerList/UserVolunteerList';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <h3>
        Email: {loggedInUser.email} Name: {loggedInUser.name}
      </h3> */}
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <PrivateRoute path='/register/:title'>
            <Register></Register>
          </PrivateRoute>

          <PrivateRoute path='/userVolunteerList'>
            <UserVolunteerList></UserVolunteerList>
          </PrivateRoute>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
