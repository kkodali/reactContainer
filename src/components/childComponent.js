import React from "react";
import PropTypes from "prop-types";

const ChildComp = props => (
  <div>
    <span>{props.childName}</span>
    <button onClick={props.controlFunc}>{props.buttonName}</button>
  </div>
);

ChildComp.propTypes = {
  childName: PropTypes.string,
  controlFunc: PropTypes.func,
  buttonName: PropTypes.string
};

export default ChildComp;
