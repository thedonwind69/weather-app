import React from 'react';
import ReactDOM from 'react-dom';

class Weather extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            allData: null,
            description: null,
            temperature: null,
            locationTimezone: null,
            currentPosition: null,
        }

    }

    componentDidMount () {
        this.displayCoordinates();
    }

    displayCoordinates () {
        let long;
        let lat;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                long = position.coords.longitude;
                lat = position.coords.latitude;
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/b789c0a90dae4db90bf5f9dc88f5f3c1/${lat},${long}`;
            
            fetch(api)
                .then((response) => {
                    return response.json();
                })
                .then(data => {
                    const {temperature, summary, icon} = data.currently;
                    this.setState({
                        allData: data,
                        temperature: temperature,
                        description: summary,
                        locationTimezone: data.timezone,
                    });
                    const icon1 = ReactDOM.findDOMNode(this.refs.icon1);
                    this.setWeatherIcons(icon, icon1);
                });
            });
        }
        
    }

    setWeatherIcons (icon, iconId) {
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconId, Skycons[currentIcon]);
    }

    render () {
        return (
            <div>
                <h1>{this.state.temperature}F</h1>
                <h1>{this.state.description}</h1>
                <h1>{this.state.locationTimezone}</h1>
                <canvas ref="icon1" width="128" height="128"></canvas>
            </div>
        )
    }

}

export default Weather;