import React from 'react';
import ReactDOM from 'react-dom';

class Weather extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            description: null,
            temperature: null,
            locationTimezone: null,
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
                        temperature: temperature,
                        description: summary,
                        locationTimezone: data.timezone,
                    });
                });
            });
        }
        this.setWeatherIcons();
    }

    setWeatherIcons (icon, iconId) {
        const skycons = new skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID,);
    }

    render () {
        return (
            <div>
                <h1>{this.state.temperature}</h1>
                <h1>{this.state.description}</h1>
                <h1>{this.state.locationTimezone}</h1>
            </div>
        )
    }

}

export default Weather;