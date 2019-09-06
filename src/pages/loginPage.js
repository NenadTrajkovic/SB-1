import React, { Component } from "react";
import "./loginPage.scss";
import Email from "../components/email/email";
import Pasword from "../components/pasword/pasword";
import Checkbox from "../components/checkbox/checkbox";
import Button from "../components/button/button";


class LoginPage extends Component {
  
  state = {
    user: []
  } 

  render() {
    return (
      <div className="wrapper">
        <form className="form" action="#" method="post" id="contact-form" noValidate>
          <h1 className="form__heading">Log into your account</h1>
            <Email />
            <Pasword />
            <Checkbox />
            <Button />
            <p className="form__reset"><a href={"/"}>Reset your login credentials</a></p>
        </form>
      </div>
    )
  }

};

export default LoginPage;