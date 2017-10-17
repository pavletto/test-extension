import React from "react";
import Oauth2 from "./oauth";
// import icon from "../../img/icon-128.png"

export default class Authorize extends React.Component {
	constructor(props) {
    super(props);
  }
  
	authorize () {
    window.oauth2.start();
  }

  render () {
    return (
      <div className="container">
        <button className="authorize" onClick={this.authorize}>Авторизация</button>
      </div>
    )
  }
};