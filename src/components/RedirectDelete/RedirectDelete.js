import React from 'react';
import { useHistory } from 'react-router-dom';

const RedirectDelete = () => {
  const history = useHistory();

  const callMe = () => {
    history.push('/userVolunteerList');
  };
  callMe();
  return <div></div>;
};

export default RedirectDelete;
