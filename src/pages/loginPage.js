import React, { Component } from "react";
import "./loginPage.scss";



class LoginPage extends Component {
  
  state = {
    user: []
  } 

  render() {
    return (
      <div className="wrapper">
        <div className="form">
          <h1 className="form__heading">Log into your account</h1>
        </div>
      </div>
    )
  }

};

export default LoginPage;