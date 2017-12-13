import React from "react";

export default class Authorize extends React.Component {
	constructor(props) {
    super(props);
  }
  
	authorize () {
    window.oauth2.start();
  }
  mouseOver(a,b) {
    console.log(a,b)
  }
  mouseOut (a,b) {
    console.log(a,b);
  } 

  render () { 
    return (
      <div className="container">
        <button className="authorize" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={this.authorize}>hh</button>
      </div>
    )
  }
};

