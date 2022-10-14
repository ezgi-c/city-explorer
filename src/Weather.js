import React from "react";
import { Accordion, Container } from "react-bootstrap";

class Weather extends React.Component {
  render() {
    return (
      <>
        <h1>Weather Forecast</h1>

        <Container>
          <Accordion defaultActiveKey="0">
            {this.props.forecast.map((day, idx) => (
              <Accordion.Item eventKey={idx} key={idx}>
                <Accordion.Header>{day.date}</Accordion.Header>
                <Accordion.Body>
                  <h4>{day.forecast}</h4>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </>
    );
  }
}

export default Weather;
