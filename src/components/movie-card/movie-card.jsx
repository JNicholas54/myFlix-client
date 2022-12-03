import React from "react";
import PropTypes from "prop-types";

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props; // movie is the name of the prop i.e movie without curly brackets
   
    return (
        <div onClick={() => onMovieClick(movie)} className="movie-card">{movie.Title}</div>
      );
    }
  }

  MovieCard.propTypes = {
    movie: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      Genre: PropTypes.shape({
        Name: PropTypes.string.isRequired
      }),
      Director: PropTypes.shape({
        Name: PropTypes.string.isRequired
      }),
      ImageUrl: PropTypes.string.isRequired // might need to change this back to ImagePath if error occurs.
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
  }; 