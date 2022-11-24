import React from 'react';

export class MainView extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [
                {_id: 1, Title: 'A Few Good Men', Description: 'desc1...', ImagePath: '...'},
                {_id: 2, Title: 'My Cousin Vinny', Description: 'desc2...', ImagePath: '...'},
                {_id: 3, Title: 'Jurassic Park', Description: 'desc3...', ImagePath: '...'},
            ]
        }
    }

    render() {
        const { movies } = this.state;
      
        if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
      
        return (
          <div className="main-view">
            {movies.map(movie => <div key={movie._id}>{movie.Title}</div>)}
          </div>
        );
      }
    }

