import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const Button = (props) => {
  return (
    <button className="btn" style={{ backgroundColor: props.color ? props.color : "blueviolet" }} >
    {props.children}
    {props.arrowafter && (<FaLongArrowAltRight style={{ margin: " 0 0  0 20px" }} />)}
  </button>
  )
}

export default Button
