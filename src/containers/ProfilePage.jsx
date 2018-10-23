import React, { Component } from "react";

import { Table, Image } from "react-bootstrap";

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = { allPeople: [] };
  }

  componentDidMount() {
    let request = new XMLHttpRequest();

    request.open("GET", "http://192.168.1.117:8090/api/people");

    request.setRequestHeader("Content-Type", "application/json");

    request.setRequestHeader("Access-Control-Allow-Origin", "*");

    request.responseType = "json";

    request.send();

    request.onload = () => {
      this.setState({ allPeople: request.response });
    };
  }

  render() {
    console.log(JSON.stringify(this.state.allPeople));

    return (
      <Table bordered striped hover condensed>
        <thead>
          <th>PROFILE</th>
        </thead>
        <tbody>
          {this.state.allPeople
            .filter(item => item.id === this.props.userId)
            .map(function(item, key) {
              return (
                <div>
                  <tr key={key}>
                    <td width="12.5%">
                      <div>
                        <img
                          src={require("C:/Users/Admin/Documents/Lucy Hamilton/CVWonderFront/src/profilePics/Melvin.jpeg")}
                          class="img-rounded"
                          height="200px"
                          width="200px"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr key={key}>
                    <td>{item.name}</td>
                  </tr>
                  <tr key={key}>
                    <td>{item.email}</td>
                  </tr>
                  <tr key={key}>
                    <td Preferred Job />
                  </tr>
                  <tr key={key}>
                    <td Preferred Location />
                  </tr>
                  <tr key={key}>
                    <td Trainer Contact Details />
                  </tr>
                  <tr key={key}>
                    <td Edit Profile />
                  </tr>
                </div>
              );
            })}
        </tbody>
      </Table>
    );
  }
}

export default ProfilePage;
