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
import RedirectDelete from './components/RedirectDelete/RedirectDelete';
import Admin from './components/Admin/Admin';
import AllVolunteerList from './components/AllVolunteerList/AllVolunteerList';
import DeleteByAdmin from './components/RedirectDelete/DeleteByAdmin';
import Event from './components/Event/Event';

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
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <PrivateRoute path='/register/:id'>
            <Register></Register>
          </PrivateRoute>

          <PrivateRoute path='/userVolunteerList'>
            <UserVolunteerList></UserVolunteerList>
          </PrivateRoute>

          <PrivateRoute path='/redirectDelete'>
            <RedirectDelete></RedirectDelete>
          </PrivateRoute>

          <Route path='/admin'>
            <Admin></Admin>
          </Route>

          <Route path='/allVounteerList'>
            <AllVolunteerList></AllVolunteerList>
          </Route>

          <Route to='/deletByAdmin'>
            <DeleteByAdmin></DeleteByAdmin>
          </Route>

          <Route path='/event'>
            <Event></Event>
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
