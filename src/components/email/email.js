
import React from "react";
import "./email.scss";


const Email = (props) => {
  return (
    <input className="email" type="email" required name="contact-email" placeholder="Email address" />
  )
};

export default Email;