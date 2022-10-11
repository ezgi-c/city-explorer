import "./App.css";
import React from "react";
import Accordion from "react-bootstrap/Accordion";

class Weather extends React.Component {
  render() {
    return (
      <>
        <Accordion defaultActiveKey="0"> 
            <Accordion.Item eventKey="0" >
              <Accordion.Header>{this.props.date}</Accordion.Header>
              <Accordion.Body>{this.props.description}</Accordion.Body>
            </Accordion.Item>
        </Accordion>
      </>
    );
  }
}

export default Weather;
