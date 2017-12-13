import React from "react";
import icon from "../../img/icon-128.png"
import Authorize from "./Authorize"

export default class extends React.Component {
  componentDidUpdate(prevProps, prevState) {
		console.log(123)    
  }
  render () {
    return (
      <Authorize /> 

    ) 
  }
}; 
