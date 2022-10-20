import "./App.css";
import React from "react";
import { Form, Button } from "react-bootstrap";

class SearchForm extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontSize: "1.5em", color: "#515F96" }}>
            Explore cities around the world!
          </Form.Label>
          <div className="form">
            <Form.Control
              className="input"
              type="text"
              placeholder="enter name of a city"
              onChange={this.props.handleChange}
              style= {{backgroundColor:"#F8F4F0"}}
            />
            <Button
              className="button"
              type="submit"
              onClick={this.props.getLocation}
            >
              Explore!
            </Button>
          </div>
        </Form.Group>
      </Form>
    );
  }
}

export default SearchForm;
