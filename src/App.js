import React, { useState, useEffect } from "react";
import "./App.css";
import "./components/Header.css";
import { v4 as uuid } from "uuid";
import Header from "./components/Header";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
function App() {
  const addUserHandler = (user) => {
    console.log(user);
    setUsers([...users, { id: uuid(), ...user }]);
  };

  const removeUser = (id) => {
    const usrList = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(usrList);
  };

  const getusers = JSON.parse(localStorage.getItem("users")) || [];
  const [users, setUsers] = useState(getusers);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div className="App">
      <Header />
      <AddUser addUserHandler={addUserHandler} />
      <div className="user">
        <UserList users={users} idUsr={removeUser} />
      </div>
    </div>
  );
}

export default App;
