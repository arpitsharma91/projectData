import React, { Component } from "react";
import Usersread from "../Usersread/Usersread";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

class usersCrud extends Component {
  state = {
    users: [],
    name: "",
    email: "",
    phone: "",
    userSelectedID: null
  };

  componentDidMount() {
    axios.get(API_URL).then(response => {
      this.setState({ users: response.data.slice(0,4) });
    });
  }

  getUserdata = () => {
      return {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone
      };
  }

  addUserInState = (response) => {
    if(!response){
      response = {
        data: {
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
        }
      }
    }
    const filterUserObject = this.state.users.map(user => {
      if(user.id === this.state.userSelectedID){
        return { 
          ...user,
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone 
        }
      }else{
        return { ...user };
      }
    });
    this.setState({
      users: filterUserObject,
      userSelectedID: null,
      name: '',
      email: '',
      phone: ''
    });
  }

  updateUserInState = (response) => {
    if(!response){
      response = {
        data: {
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
          id: this.state.userSelectedID
        }
      }
    }
    const existingUsers = this.state.users.map(user => {
      return { ...user };
    });
    existingUsers.push({
      name: response.data.name,
      email: response.data.email,
      phone: response.data.phone,
      id: response.data.id
    });
    this.setState({
      users: existingUsers,
      name: '',
      email: '',
      phone: ''
    });
  }

  postHandler = () => {
    const data = this.getUserdata();
    if (this.state.userSelectedID) {
      const config = { headers: {'Content-Type': 'application/json'} };
      axios.put(`${API_URL}/${this.state.userSelectedID}`, data, config).then(response => {
        this.addUserInState(response);
      })
      .catch( err => {
        this.addUserInState();
      });
    } else {
      axios.post(API_URL, data).then(response => {
        this.updateUserInState(response);
      })
      .catch(err => {
        this.updateUserInState()
      });
    }
  };

  deleteUser = id => {
    const remainingUsers = this.state.users.filter(user => {
      return user.id !== id;
    });
    this.setState({ users: remainingUsers });
  }

  deleteHandler = id => {
    axios.delete(`${API_URL}/${id}`).then(response => {
        this.deleteUser(id);
      })
      .catch(err => {
        this.deleteUser(id);
      });
  };

  updateHandler = id => {
    const userData = this.state.users.filter(user => {
      return user.id === id;
    })[0];
    this.setState({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      userSelectedID: userData.id
    });
  }

  render() {
    const users = this.state.users.map(user => {
      return (
        <Usersread
          key={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
          clicked={() => this.deleteHandler(user.id)}
          updated={() => this.updateHandler(user.id)}
        />
      );
    });
    return (
      <div className="container">
        <h3 className="text-center my-5">
          Welcome to users crud app using jsonplaceholder api
        </h3>

        <div className="card m-5" style={{padding: 30}}>
          <h1>Add a User</h1>
          <label>Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={event => this.setState({ name: event.target.value })}
          />
          <label>Email</label>
          <input
            type="email"
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
          />
          <label>PhoneNumber</label>
          <input
            type="phone"
            value={this.state.phone}
            onChange={event => this.setState({ phone: event.target.value })}
          />
          <button
            onClick={this.postHandler}
            type="button"
            style={{marginTop: 10, width: 200}}
            className="btn btn-primary"
          >
            { this.state.userSelectedID ? "Update User" : "Add User" }
          </button>
        </div>
        <div className="m-2">{users}</div>
      </div>
    );
  }
}

export default usersCrud;
