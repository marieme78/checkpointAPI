import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  const fetchData = async () => {
    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log("+++++++", result.data);
      setUserList(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>Affichage données</h2>
      <div className="global_div">
        <div>
      <ul>
        {userList.map((user) => (
          <div className="one_list">
            <li key={user.id}>
              <div>
                <b>Name:</b>
                {user.name}-
              </div>
              <div>
                <b>Username:</b>
                {user.surname} -
              </div>
              <div>
                <b>User email</b>:{user.email} -
              </div>
              <div>
                <b>User number</b>:{user.phone}
              </div>
            </li>
          </div>
        ))}
      </ul>
      </div>
      </div>
    </>
  );
};

export default UserList;
