import React from "react";
import { Accordion, Container } from "react-bootstrap";

class Weather extends React.Component {
  render() {
    const forecast = this.props.forecast;
    return (
      <div className="weather">
        {this.props.displayWeather && (
          <>
            <h1>Weather Forecast</h1>
            <Container>
              <Accordion defaultActiveKey="0">
                {forecast.map((day, idx) => (
                  <WeatherDay idx={idx} day={day} />
                ))}
              </Accordion>
            </Container>
          </>
        )}
      </div>
    );
  }
}

class WeatherDay extends React.Component {
  render() {
    const day = this.props.day;
    const idx = this.props.idx;
    return (
      <Accordion.Item eventKey='0' key={idx}>
        <Accordion.Header>{day.date}</Accordion.Header>
        <Accordion.Body style={{backgroundColor: "#F8F4F0"}}>
          <h4>{day.forecast}</h4>
        </Accordion.Body>
      </Accordion.Item>
    );
  }
}

export default Weather;
