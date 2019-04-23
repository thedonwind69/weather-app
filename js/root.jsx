import React from 'react';
import SearchBar from './search_bar';

class Root extends React.Component {

    constructor (props) {
        super(props);

    }

    render () {
        return (
            <div>
                <h1>WEATHER APP</h1>
                <SearchBar />
            </div>
        )
    }

}

export default Root;