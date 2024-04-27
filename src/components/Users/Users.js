"use client";

import React, { useEffect, useState } from "react";
import styles from "./Users.module.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1 className={styles.header_text}>Total Users: {users.length}</h1>
      {users.map((user) => (
        <div
          key={user.id}
          className="card w-[70%] my-5 mx-auto bg-base-100 shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title">{user.name}</h2>
            <p>{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
