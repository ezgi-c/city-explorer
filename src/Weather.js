import "./App.css";
import React from "react";
import { Accordion, Container } from 'react-bootstrap';


class Weather extends React.Component {
  render() {
    return (
      <Container>
      <Accordion defaultActiveKey='0'>
      {this.props.forecast.map((day, idx) => (
            <Accordion.Item eventKey={idx} key={idx} >
              <Accordion.Header>{day.date}</Accordion.Header>
              <Accordion.Body>
              <h4>{day.description}</h4>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    )
  }
}

export default Weather;
