import React from "react";
import { Row, Col, Card } from "react-bootstrap";

class Movies extends React.Component {
  render() {
    return (
      <Row>
        
        {this.props.movies.map((movie, idx) => (movie.poster_path !== null &&
          <Col>
            <Card key={idx}>
              <Card.Img 
              src = {movie.image_url}
              alt= {movie.overview}
              />
              <Card.Body>
                <Card.Text>Title:{movie.title}</Card.Text>
                <Card.Text>Overview:{movie.overview}</Card.Text>
                <Card.Text>Average Votes:{movie.average_votes}</Card.Text>
                <Card.Text>Total Votes:{movie.total_votes}</Card.Text>
                <Card.Text>Popularity:{movie.popularity}</Card.Text>
                <Card.Text>Released on:{movie.released_on}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default Movies;
