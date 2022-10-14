import React from "react";
import { Row, Col, Card } from "react-bootstrap";

class Movies extends React.Component {
  render() {
    return (
      <div className="movies">
       {this.props.movies.length > 0 && (
          <h1>Movies</h1>
        )}
      <Row className="row" xs={1} sm={2} md={3} lg={4}>
        
        {this.props.movies.map((movie, idx) => (movie.poster_path !== null &&
          <Col className="p-4">
            <Card key={idx} className="" style={{height:'40em'}}>
              <Card.Img 
              src = {movie.image_url}
              alt= {movie.overview}
              />
              <Card.Body style={{ overflow:'scroll' }}>
                <Card.Text style={{fontSize: '24px', fontWeight: '600'}}>{movie.title}</Card.Text>
                <Card.Text>{movie.overview}</Card.Text>
                <Card.Text>Average Votes: {movie.average_votes}</Card.Text>
                <Card.Text>Total Votes: {movie.total_votes}</Card.Text>
                <Card.Text>Popularity: {movie.popularity}</Card.Text>
                <Card.Text>Released on: {movie.released_on}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
    );
  }
}

export default Movies;
