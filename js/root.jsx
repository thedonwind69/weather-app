import React from 'react';
import Weather from './weather';

class Root extends React.Component {

    constructor (props) {
        super(props);

    }

    render () {
        return (
            <div>
                <h1>WEATHER APP BITCH</h1>
                <Weather />
            </div>
        )
    }

}

export default Root;