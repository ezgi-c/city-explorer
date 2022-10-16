import "./App.css";
import React from "react";
import { Container } from "react-bootstrap";

class Location extends React.Component {
  render() {
    const display_name = this.props.location.display_name;
    const latitude = this.props.latitude;
    const longitude = this.props.longitude;

    return (
      <Container className="location">
        {display_name && (
          <div>
            <h2>Welocome to {display_name}!</h2>
            <h4>
              latitude : {latitude}, longitude :
              {longitude}
            </h4>
            <img
              className="map"
              src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${latitude},${longitude}&zoom=11&size=1400x400`}
              alt="map"
            />
          </div>
        )}
      </Container>
    );
  }
}

export default Location;
