import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
// import NumberOfImages from './NumberOfImages';

class App extends React.Component {
    state = { images: [], perPage: 1 };

    onPerPageInput = (e) => {
        let perPage = +e.target.value;
        this.setState({ perPage });
    };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term,
                per_page: this.state.perPage,
            },
        });

        this.setState({ images: response.data.results });
        console.log(response);
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <input
                    type="text"
                    value={this.state.perPage}
                    onChange={this.onPerPageInput}
                />
                <label>Image Search</label>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
