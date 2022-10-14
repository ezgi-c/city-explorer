import "./App.css";
import React from "react";
import axios from "axios";
import Header from "./Header";
import Weather from "./Weather";
import Movies from "./Movies";
//import {Container, Form, Button} from 'react-bootstrap

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      location: {},
      latitude: "",
      longitude: "",
      forecast: [],
      movies: [],
    };
  }

  handleChange = (event) => this.setState({ searchQuery: event.target.value });

  getLocation = async () => {
    try {
      // baseURL
      // ? is called a "query"
      // key: YOUR_ACCESS_TOKEN
      // q: SEARCH_STRING
      // format: 'json'
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;
      // console.log("URL: ", url);
      const response = await axios.get(url);
      // console.log("Response data: ", response);
      // console.log("response data[0]: ", response.data[0]);
      this.setState(
        {
          location: response.data[0],
          latitude: response.data[0].lat,
          longitude: response.data[0].lon,

          error: false,
        },
        () => {
          this.getForecast();
          this.getMovies();
        }
      );
    } catch (error) {
      // console.log(error);
      this.setState({
        error: true,
        location: false,
      });
    }
  };

  getForecast = async () => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.latitude}&lon=${this.state.longitude}`;
      console.log("URL: ", url);
      const response = await axios.get(url);
      console.log("weather data from server: ", response.data);
      this.setState({ forecast: response.data });
    } catch (error) {
      console.log("Error in getForecast: ", error);
      this.setState({
        forecast: false,
        serverError: true,
      });
    }
  };

  getMovies = async () => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.searchQuery}`;
      console.log("URL: ", url);
      const response = await axios.get(url);
      console.log("movie data from server: ", response.data);
      this.setState({ movies: response.data });
    } catch (error) {
      console.log("Error in getForecast: ", error);
      this.setState({
        forecast: false,
        serverError: true,
      });
    }
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
              latitude : {this.state.latitude}, longitude :
              {this.state.longitude}
            </h4>
            <img
              src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.latitude},${this.state.longitude}&zoom=12`}
              alt="map"
            />
          </div>
        )}
        <br></br>
        {this.state.forecast.length > 0 && (
          <Weather forecast={this.state.forecast} />
        )}
        {this.state.serverError && (
          <div>
            <h1>Weather Forecast</h1>
            <img id="dog" src="500dog.jpeg" alt="500: Internal Server Error" />
          </div>
        )}
        <Movies movies={this.state.movies} />
        {this.state.forecast.length < 1 && !(<Weather />)}
        {this.state.error && (
          <div>
            <img id="cat" src="400.jpeg" alt="400: Bad Request" />
          </div>
        )}
      </div>
    );
  }
}

export default App;
