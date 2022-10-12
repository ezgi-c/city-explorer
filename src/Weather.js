import "./App.css";
import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <>
        <h3>{this.props.date}</h3>
        <h4>{this.props.description}</h4>
      </>
    );
  }
}

export default Weather;
