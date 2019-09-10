
import React from "react";
import "./email.scss";


const Email = ({email_input, emailFunc, blur, errorCheck}) => {
  return (
    <span>
      <label  htmlFor="userName"></label>
        <input  className={errorCheck("email") ? "error" : "email"} 
                type="email" 
                id="userName" 
                value={email_input}
                onChange={emailFunc}
                onBlur={blur("email")} 
                required
                placeholder="Email address" 
          />
    </span>
  )
};

export default Email;