import React from 'react';

import './Results.css';
import Item from './Item';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.lb = null;
    }

    render() {
        const { movies } = this.props;

        return (
            <div className="Results">
                {
                    movies.map( (item, index) => {
                        return (
                            <div>
                                <h2 className="Results-header">
                                    <span className="Results-header-in">
                                        { item.yearWatched } : { item.movies.length }
                                    </span>
                                </h2>
                                <div className="Results-images">
                                    {
                                        item.movies.map( (item) => {
                                            return <Item movie={item}  />
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Results;
