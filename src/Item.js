import './Item.css';

function Item() {
    return (
        <div>
            <a
                className="Item-image"
                :href="movie.poster"
                data-pswp-width="300"
                data-pswp-height="444"
            >
                <img
                    className="Item-image-in"
                    :src="movie.poster"
                    loading="lazy"
                    width="150"
                    height="222"
                    :alt="movie.title"
                    :data-title="movie.title"
                    :data-year="movie.year"
                    :data-runtime="movie.runtime"
                    :data-genre="movie.genre"
                    :data-actors="movie.actors"
                    :data-director="movie.director"
                    :data-plot="movie.plot"
                    :data-imdb-rating="movie.imdbRating"
                    :data-box="movie.box"
                    :data-imdb-id="movie.imdbID"
                />
            </a>
            <div className="pswp-caption-content">
                <h3 className="Item-title">
                    <a :href="'https://www.imdb.com/title/'+movie.imdbID+'/reference/'">
                        {{movie.title}} - IMDB: ({{movie.imdbRating}})
                    </a>
                </h3>

                <div className="Item-line"><span>Runtime: </span><span>{{movie.runtime}}</span></div>
                <div className="Item--line"><span>Genre: </span><span>{{movie.genre}}</span></div>
                <div className="Item--line"><span>Actors: </span><span>{{movie.actors}}</span></div>
                <div className="Item--line"><span>Director: </span><span>{{movie.director}}</span></div>
                <div className="Item--line"><span>Plot: </span><span>{{movie.plot}}</span></div>
                <div className="Item--line"><span>Year: </span><span>{{movie.year}}</span></div>
                <div className="Item--line"><span>Box: </span><span>{{movie.box}}</span></div>
            </div>
        </div>
    );
}

export default Item;
