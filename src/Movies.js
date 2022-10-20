import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

class Movies extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div className="movies">
        {this.props.displayMovies && (
          <Container>
            <h1>Movies</h1>
            <Row className="row" sm={1} md={2} lg={3} xl={4}>
              {movies.map(
                (movie, idx) =>
                  movie.poster_path !== null && (
                    <Movie idx={idx} movie={movie} />
                  )
              )}
            </Row>
          </Container>
        )}
      </div>
    );
  }
}

class Movie extends React.Component {
  render() {
    const movie = this.props.movie;
    const idx = this.props.idx;
    return (
      <Col className="p-4" key={idx}>
        <Card
          key={idx}
          style={{ height: "50em", width: "19em", backgroundColor: "#F8F4F0" }}
        >
          <Card.Img src={movie.image_url} alt={movie.overview} />
          <Card.Body style={{ overflow: "scroll" }}>
            <Card.Text
              style={{ fontSize: "24px", fontWeight: "700", color: "#515F96" }}
            >
              {movie.title}
            </Card.Text>
            <Card.Text style={{ color: "rgb(40, 40, 41)" }}>
              {movie.overview}
            </Card.Text>
            <Card.Text>Average Votes: {movie.average_votes}</Card.Text>
            <Card.Text>Total Votes: {movie.total_votes}</Card.Text>
            <Card.Text>Popularity: {movie.popularity}</Card.Text>
            <Card.Text>Released on: {movie.released_on}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Movies;
