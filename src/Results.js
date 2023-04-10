import './Results.css';

function Results() {
    return (
        <div className="Results">
            {
                converted.map( (item, index) => {
                    return (
                        <div>
                            <h2 className="Results-header">
                                <span className="Results-header-in">
                                    {{ item.yearWatched }} : {{ item.movies.length }}
                                </span>
                            </h2>
                            <div className="Results-images">
                                {
                                    item.movies.map( (item, index) => {
                                        return <Item />
                                    });
                                }
                            </div>
                        </div>
                    )
                });
            }
        </div>
    );
}

export default Results;
