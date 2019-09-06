
import React from "react";
import "./checkbox.scss";


const Checkbox = (props) => {
  return (
    <span className="checkbox">
      <input className="checkbox__input" type="checkbox" id="rememberMe" required name="checkbox" />
        <label className="checkbox__description" htmlFor="rememberMe" >Remember me</label>
    </span>
  )
};

export default Checkbox;