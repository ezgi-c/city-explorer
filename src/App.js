import "./App.css";
import React from "react";
import axios from "axios";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      location: {},
      latitude: "",
      longitude: "",
    };
  }

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  getLocation = async () => {
    // baseURL
    // ? is called a "query"
    // key: YOUR_ACCESS_TOKEN
    // q: SEARCH_STRING
    // format: 'json'
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;
    // console.log("URL: ", url);
    const response = await axios.get(url);
    // console.log("Response Object: ", response);
    // console.log("response data[0]: ", response.data[0]);
    this.setState({ location: response.data[0] });
    this.setState({ latitude: response.data[0].lat });
    this.setState({ longitude: response.data[0].lon }, () =>
      console.log("coordinates: ", this.state.latitude, this.state.longitude)
    );
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="search for a city"
        />
        <button onClick={this.getLocation}>Explore!</button>

        {this.state.location.display_name && (
          <div>
            <h2>
              The city you searched for is {this.state.location.display_name}
            </h2>
            <h4>
              latitude : {this.state.latitude}, longitude :{" "}
              {this.state.longitude}
            </h4>
            <img
              src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.latitude},${this.state.longitude}&zoom=12`}
              alt="map"
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
