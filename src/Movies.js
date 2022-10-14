import React from "react";
import { Row, Col, Card } from "react-bootstrap";

class Movies extends React.Component {
  render() {
    return (
      <Row>
        {this.props.movies.map((movie) => (
          <Col>
            <Card>
              <Card.Img 
              src = {movie.image_url}
              alt= {movie.overview}
              />
              <Card.Body>
                <Card.Text>Title:{movie.title}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default Movies;
