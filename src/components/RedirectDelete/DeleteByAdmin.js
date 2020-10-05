import React from 'react';
import { useHistory } from 'react-router-dom';

const DeleteByAdmin = () => {
  const history = useHistory();

  const callMe = () => {
    history.push('/admin');
  };
  callMe();
  return <div></div>;
};

export default DeleteByAdmin;
