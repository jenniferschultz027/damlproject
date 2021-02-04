import React from 'react';
import { WiDaySunny, WiDayShowers, WiNightShowers, WiDayCloudy, WiDaySunnyOvercast, WiShowers } from 'weather-icons-react';

const returnDate = d => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date(d);
    return months[date.getMonth()] + ' ' + date.getDate();
}

const returnWeather = w => {
    const image = {
        'sunny': WiDaySunny,
        'partly cloudy': WiDaySunnyOvercast,
        'mostly sunny': WiDaySunnyOvercast,
        'mostly cloudy': WiDayCloudy,
        'cloudy': WiDayCloudy,
        'showers': WiShowers,
        'pm showers': WiNightShowers,
        'am showers': WiDayShowers
    }
    const Image = image[w];
    return <Image size = '90%'/>;
}

class Day extends React.Component {
    render() {
        return (
            <div className = 'day'>
                <div className = 'date'>
                    {returnDate(this.props.date)}
                </div>
                <div className = 'image'>
                    {returnWeather(this.props.forecast)}
                </div>
                <div className = 'temp'>
                    <div>
                        {'Low: ' + (this.props.low)  + '\u00b0'}
                    </div>
                    <div>
                        {'High: ' + (this.props.high) + '\u00b0'}
                    </div>
                </div>
                <div className = 'percent'>
                        {'Precipitation: ' + (this.props.prec) + '%'}
                </div>
            </div>
        )
    }
}


export default Day;
