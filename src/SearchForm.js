import "./App.css";
import React from "react";
import {Form, Button, Container} from "react-bootstrap";


class SearchForm extends React.Component {
  render() {
    return (
      <Container >
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{fontSize: "2em", color: "rgb(74, 70, 70)"}}>Search for a city around the world to get information about its weather, map, and related movies!</Form.Label>
        <div className="form">
        <Form.Control className="input" type="text" placeholder="enter name of a city" onChange={this.props.handleChange}/>
        <Button className="button" type="submit" onClick={this.props.getLocation}>
          Submit
        </Button>
        </div>
        </Form.Group>
      </Form>
      </Container>
    );
  }
}

export default SearchForm;
