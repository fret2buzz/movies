import React from "react";
import { data } from "./data.js";
import Query from './Query';
import Results from './Results';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: data[0].movies,
            isLoaded: false,
            converted: [],
            list: localStorage.getItem("moviesView")
        }
        this.updateData = this.updateData.bind(this);
        this.updateView = this.updateView.bind(this);
    }

    updateData(newData) {
        this.setState({
            converted: newData
        });
    }

    updateView(view) {
        localStorage.setItem("moviesView", view);
        this.setState({
            list: view
        });
    }

    componentDidMount() {
        this.setState({
            isLoaded: true
        });
    }

    render() {
        return (
            <div
                className={
                    "App " + (this.state.isLoaded ? "m-loaded" : "") +
                    (this.state.list ? " m-list" : "")
                }
            >
                <Query
                    movies={this.state.movies}
                    moviesView={this.state.list}
                    updateData={this.updateData}
                    updateView={this.updateView}
                />
                <Results movies={this.state.converted} />
            </div>
        );
    };
}

export default App;
