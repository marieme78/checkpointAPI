import React from "react";
import Card from 'react-bootstrap/Card';
import UserList from "./UserList";

const Usercard = (userList) => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{userList.username}</Card.Title>
        <Card.Text>{}
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  );
};
export default Usercard;
