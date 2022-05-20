import React from "react";
import UserCard from "./UserCard";

function UserList(props) {
  console.log(props);

  const delUser = (id) => {
    props.idUsr(id);
  };

  const renderUsers = props.users.map((user) => {
    return <UserCard user={user} clickHander={delUser} key={user.id} />;
  });
  return(
    <div className="ui celled list">{renderUsers}</div>
  );
}

export default UserList;
