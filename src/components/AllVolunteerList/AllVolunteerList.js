import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import trash from '../../logos/trash.png';
import './AllVolunteerList.css';

const AllVolunteerList = () => {
  const [volunteersList, setVolunteersList] = useState([]);

  const history = useHistory();

  useEffect(() => {
    fetch('https://cryptic-inlet-22709.herokuapp.com/allVolunteersList')
      .then((res) => res.json())
      .then((data) => setVolunteersList(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://cryptic-inlet-22709.herokuapp.com/delete/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          history.push('/deletByAdmin');
        }
      });
  };

  return (
    <div
      style={{ backgroundColor: '#f8fafc', minHeight: '560px' }}
      className='pl-2 pt-4 pr-2'
    >
      <h5>Volunteer Register List</h5>
      <div className='contentBody'>
        <Row className='mb-4 mr-1 tableHeader'>
          <Col xs={2}>Name</Col>
          <Col xs={3}>Email Id</Col>
          <Col xs={2}>Registiatin Date</Col>
          <Col xs={3}>Volunteer List</Col>
          <Col xs={1}>Action</Col>
        </Row>

        {volunteersList.map((item) => (
          <Row className='mt-2'>
            <Col xs={2}>{item.name}</Col>
            <Col xs={3}>{item.email}</Col>
            <Col xs={2}>{item.date}</Col>
            <Col xs={3}>{item.volunteerTitle}</Col>
            <Col xs={1} className='px-auto'>
              <Button onClick={() => handleDelete(item._id)} variant='danger'>
                <img src={trash} height='20' alt='' />
              </Button>
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
};

export default AllVolunteerList;
