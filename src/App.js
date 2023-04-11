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
            converted: []
        }
        this.updateData = this.updateData.bind(this);
    }

    updateData(newData) {
        this.setState({
            converted: newData
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
                className={"App " + (this.state.isLoaded ? "m-loaded" : "")}
            >
                <Query movies={this.state.movies} updateData={this.updateData} />
                <Results movies={this.state.converted} />
            </div>
        );
    };
}

export default App;
