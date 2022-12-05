import React from "react";
import axios from 'axios';
import PropTypes from "prop-types";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props; // movie is the name of the prop i.e movie without curly brackets
   
    return (
      <Card>
        <Card.Img variant="top" src={movie.ImagePath} />

        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <Button onClick={() => onMovieClick(movie)} variant="primary">Open</Button>
        </Card.Body>
      </Card>
      );
    }
  }

  MovieCard.propTypes = {
    movie: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      ImagePath: PropTypes.string.isRequired
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
  }; 