
import React from "react";
import "./password.scss";


const Password = ({password_input, passwordFunc, blur, errorCheck}) => {
  return (
    <span>
      <label  htmlFor="pass"></label>
      <input  className={errorCheck("password") ? "error" : "password"}  
              type="password" 
              id="pass"
              value={password_input}
              onChange={passwordFunc}
              onBlur={blur("password")} 
              required 
              placeholder="Password" 
        />
    </span>
  )
};

export default Password;

