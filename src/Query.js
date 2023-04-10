import './Query.css';

function Query() {
    return (
        <div className="Query">
            <div>
                <h1>Total: {{ filteredMovies.length }}</h1>
            </div>
            <div>
                <input
                    placeholder="yearWatched"
                    type="text"
                    v-on:input="filterData($event, 'yearWatched')"
                    value="2023"
                />
            </div>
            <div>
                <input
                    placeholder="title"
                    type="text"
                    v-on:input="filterData($event, 'title')"
                />
            </div>
            <div>
                <input
                    placeholder="actors"
                    type="text"
                    v-on:input="filterData($event, 'actors')"
                />
            </div>
        </div>
    );
}

export default Query;
