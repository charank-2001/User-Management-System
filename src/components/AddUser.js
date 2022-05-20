import React from "react";
import "./Header.css";
import { TagsInput } from "react-tag-input-component";

export class AddUser extends React.Component {
  state = {
    name:"",
  };
  addUsers =(e)=>{
    e.preventDefault();
    this.props.addUserHandler(this.state);
    this.setState({name:""});
  };

  render() {
    return (
      <div>
        <div className="user">
          <h3>Customer Success Managers</h3>
          <form className="user-form" onSubmit={this.addUsers}>
            <input
              type="text"
              className="profileStr"
              placeholder="Add by Name or email"
              name="name"
              onChange={(e)=>this.setState({name : e.target.value})}
              value={this.state.name}
              required
              /*pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"*/
            />
            <button className="normal">Add CSM</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddUser
