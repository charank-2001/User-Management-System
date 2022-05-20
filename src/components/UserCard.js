import React from "react";
import "./userCard.css";
function UserCard(props) {
  const { id, name } = props.user;
  const temp = name.replace(/\s+/g, "").toLowerCase();
  const profile = name.charAt(0).toUpperCase();

  return (
    <div className="item">
        <h4>{profile}</h4>
        <div style={{marginLeft:"20px"}} className="content">
          <div>{name}</div>
          <div style={{ color: "#7f7f80", marginTop: "0px" }}>{temp}@spottabl.com</div>
        </div>
        <i
        className="trash alternate outline icon"
        style={{ color: "blue", marginTop: "9px", cursor:"pointer" }}
        onClick={() => props.clickHander(id)}
      ></i>
      </div>
    
  );
}

export default UserCard;
