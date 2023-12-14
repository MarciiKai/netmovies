import React from 'react';

class Movies extends React.Component {
  state = {
    selectedMovie: null,
  };

  render() {
    const { movies } = this.props;

    // Check if movies is not defined or not an array
    if (!movies || !Array.isArray(movies)) {
      return <p>No movies available.</p>;
    }

    return (
      <div>
        <h1>Movies</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie.title} onClick={() => this.setState({ selectedMovie: movie })}>
              {movie.title} ({movie.year})
            </li>
          ))}
        </ul>
        {this.state.selectedMovie && (
          <p>Selected movie: {this.state.selectedMovie.title}</p>
        )}
      </div>
    );
  }
}

export default Movies;
