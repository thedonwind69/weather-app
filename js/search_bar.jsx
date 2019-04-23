import React from 'react';

class SearchBar extends React.Component {

    constructor (props) {
        super(props);

    }

    render () {
        return (
            <div>
                <form>
                    <input type='text'></input>
                    <button>Search Weather</button>
                </form>
            </div>
        )
    }

}

export default SearchBar;