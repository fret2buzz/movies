import React from 'react';
import './Item.css';

class Item extends React.Component {
    render() {
        const { movie } = this.props;

        return (
            <div>
                <span
                    className="Item-image"
                    // href={movie.poster}
                    data-pswp-width="300"
                    data-pswp-height="444"
                >
                    <img
                        className="Item-image-in"
                        src={movie.poster}
                        loading="lazy"
                        width="150"
                        height="222"
                        alt={movie.title}
                        data-title={movie.title}
                        data-year={movie.year}
                        data-runtime={movie.runtime}
                        data-genre={movie.genre}
                        data-actors={movie.actors}
                        data-director={movie.director}
                        data-plot={movie.plot}
                        data-imdb-rating={movie.imdbRating}
                        data-box={movie.box}
                        data-imdb-id={movie.imdbID}
                    />
                </span>
                <div className="Item-card">
                    <h3 className="Item-title">
                        <a href={'https://www.imdb.com/title/'+movie.imdbID+'/reference/'}>
                            {movie.title} - IMDB: ({movie.imdbRating})
                        </a>
                    </h3>

                    <div className="Item-line"><span className="Item-label">Runtime: </span><span>{movie.runtime}</span></div>
                    <div className="Item-line"><span className="Item-label">Genre: </span><span>{movie.genre}</span></div>
                    <div className="Item-line"><span className="Item-label">Actors: </span><span>{movie.actors}</span></div>
                    <div className="Item-line"><span className="Item-label">Director: </span><span>{movie.director}</span></div>
                    <div className="Item-line"><span className="Item-label">Plot: </span><span>{movie.plot}</span></div>
                    <div className="Item-line"><span className="Item-label">Year: </span><span>{movie.year}</span></div>
                    <div className="Item-line"><span className="Item-label">Box: </span><span>{movie.box}</span></div>
                </div>
            </div>
        );
    }
}

export default Item;
