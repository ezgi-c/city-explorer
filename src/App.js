import "./App.css";
import React from "react";
import axios from "axios";
import Header from "./Header";
import Weather from "./Weather";
import Movies from "./Movies";
import SearchForm from "./SearchForm";
import Location from "./Location";

// import Alert from 'react-bootstrap/Alert';
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

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ searchQuery: event.target.value });
  };

  getLocation = async (event) => {
    event.preventDefault();
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
      console.log("Error in getLocation: ", error);
      alert(`${error.message}. Code: ${error.code}`);
      // used 'alert' inspired by Ethan's code
      this.setState({
        location: false,
        displayWeather: false,
        displayMovies: false,
      });
    }
  };

  getForecast = async () => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.latitude}&lon=${this.state.longitude}`;
      // console.log("URL: ", url);
      const weatherResponse = await axios.get(url);
      // console.log("weather data from server: ", weatherResponse.data);
      this.setState({ forecast: weatherResponse.data, displayWeather: true });
    } catch (error) {
      console.log("Error in getForecast: ", error);
      alert(`${error.message}. Code: ${error.code}`);
    }
  };

  getMovies = async () => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.searchQuery}`;
      // console.log("URL: ", url);
      const response = await axios.get(url);
      // console.log("movie data from server: ", response.data);
      this.setState({ movies: response.data, displayMovies: true });
    } catch (error) {
      console.log("Error in getMovies: ", error);
      alert(`${error.message}. Code: ${error.code}`);
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm
          handleChange={this.handleChange}
          getLocation={this.getLocation}
        />
        <Location
          location={this.state.location}
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />
        <Weather
          forecast={this.state.forecast}
          displayWeather={this.state.displayWeather}
        />
        <Movies
          movies={this.state.movies}
          displayMovies={this.state.displayMovies}
        />
      </div>
    );
  }
}

export default App;
