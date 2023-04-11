import React from 'react';
import './Query.css';

class Query extends React.Component {
    constructor(props) {
        super(props);
        this.filteredMovies = [];
        this.state = {
            actors: "",
            yearWatched: "2023",
            title: ""
        };
        this.filterData = this.filterData.bind(this);
    }

    filterData(event, type) {
        clearTimeout(this.debounce);
        this.debounce = setTimeout(() => {
            this.setState({
                [type]: event.target.value
            }, () => {
                console.log(this.state);
                this.getData(this.state);
            });
        }, 600);
    }

    componentDidMount() {
        this.getData(this.state);
    }

    getData(types) {
        const { movies, updateData } = this.props;

        this.filteredMovies = movies.filter(movie => {
            return (
                movie.yearWatched.toString().toLowerCase().includes(types.yearWatched.toLowerCase()) &&
                movie.title.toString().toLowerCase().includes(types.title.toLowerCase()) &&
                movie.actors.toString().toLowerCase().includes(types.actors.toLowerCase())
            );
        });

        let converted = [];
        this.filteredMovies.forEach(movie => {
            const yearWatched = movie.yearWatched;
            let object = converted.find(obj => obj.yearWatched === yearWatched);
            if (!object) {
                object = {
                    yearWatched,
                    movies: []
                };
                converted.push(object);
            }

            object.movies.push(movie);
        });

        updateData(converted);
    }

    render() {
        return (
            <div className="Query">
                <div>
                    <h1>Total: {this.filteredMovies.length}</h1>
                </div>
                <div>
                    <input
                        placeholder="yearWatched"
                        type="text"
                        onChange={e => this.filterData(e, "yearWatched")}
                        defaultValue={this.state.yearWatched}
                    />
                </div>
                <div>
                    <input
                        placeholder="title"
                        type="text"
                        onChange={e => this.filterData(e, "title")}
                    />
                </div>
                <div>
                    <input
                        placeholder="actors"
                        type="text"
                        onChange={e => this.filterData(e, "actors")}
                    />
                </div>
            </div>
        );
    };
}

export default Query;
