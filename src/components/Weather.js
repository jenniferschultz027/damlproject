import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      items: [],
      weather: {
        sunny: "https://icons-for-free.com/iconfiles/png/512/sunny+temperature+weather+icon-1320196637430890623.png",
        partlyCloudy: "https://www.iconbunny.com/icons/media/catalog/product/4/8/484.10-partly-cloudy-i-icon-iconbunny.jpg",
        amShowers: "https://iconarchive.com/download/i43447/oxygen-icons.org/oxygen/Status-weather-showers-night.ico",
        pmShowers: "https://iconarchive.com/download/i43446/oxygen-icons.org/oxygen/Status-weather-showers-day.ico",
        showers: "https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/weather-showers-scattered-512.png",
        cloudy: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB0KuwT4iZ1TWaelvthfb4_cbmGXyaiyRqbw&usqp=CAU"
      }
    };
  }

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/nfried16/swe-practice/weather")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        } 
      )
  }

  render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <table className = "table">
            <tr className = "date">
              <td>Jan {items[0].date.substring(4,5)}</td>
              <td>Jan {items[1].date.substring(4,5)}</td>
              <td>Jan {items[2].date.substring(4,5)}</td>
              <td>Jan {items[3].date.substring(4,5)}</td>
              <td>Jan {items[4].date.substring(4,5)}</td>
              <td>Jan {items[5].date.substring(4,5)}</td>
              <td>Jan {items[6].date.substring(4,5)}</td>
              <td>Jan {items[7].date.substring(4,5)}</td>
              <td>Jan {items[8].date.substring(4,5)}</td>
              <td>Jan {items[9].date.substring(3,5)}</td>
            </tr>
            <tr className = "forecast">
              <td><img src = {this.state.weather.sunny}/></td>
              <td><img src = {this.state.weather.partlyCloudy}/></td>
              <td><img src = {this.state.weather.partlyCloudy}/></td>
              <td><img src = {this.state.weather.cloudy}/></td>
              <td><img src = {this.state.weather.sunny}/></td>
              <td><img src = {this.state.weather.showers}/></td>
              <td><img src = {this.state.weather.cloudy}/></td>
              <td><img src = {this.state.weather.amShowers}/></td>
              <td><img src = {this.state.weather.pmShowers}/></td>
              <td><img src = {this.state.weather.sunny}/></td>
            </tr>
            <tr className = "low">
              <td>Low: {items[0].low_temp}{'\u00b0'}</td>
              <td>Low: {items[1].low_temp}{'\u00b0'}</td>
              <td>Low: {items[2].low_temp}{'\u00b0'}</td>
              <td>Low: {items[3].low_temp}{'\u00b0'}</td>
              <td>Low: {items[4].low_temp}{'\u00b0'}</td>
              <td>Low: {items[5].low_temp}{'\u00b0'}</td>
              <td>Low: {items[6].low_temp}{'\u00b0'}</td>
              <td>Low: {items[7].low_temp}{'\u00b0'}</td>
              <td>Low: {items[8].low_temp}{'\u00b0'}</td>
              <td>Low: {items[9].low_temp}{'\u00b0'}</td>
            </tr>
            <tr className = "high">
              <td>High: {items[0].high_temp}{'\u00b0'}</td>
              <td>High: {items[1].high_temp}{'\u00b0'}</td>
              <td>High: {items[2].high_temp}{'\u00b0'}</td>
              <td>High: {items[3].high_temp}{'\u00b0'}</td>
              <td>High: {items[4].high_temp}{'\u00b0'}</td>
              <td>High: {items[5].high_temp}{'\u00b0'}</td>
              <td>High: {items[6].high_temp}{'\u00b0'}</td>
              <td>High: {items[7].high_temp}{'\u00b0'}</td>
              <td>High: {items[8].high_temp}{'\u00b0'}</td>
              <td>High: {items[9].high_temp}{'\u00b0'}</td>
            </tr>
            <tr className = "precipitation">
              <td>Precipitation: {items[0].percent_precipitation}%</td>
              <td>Precipitation: {items[1].percent_precipitation}%</td>
              <td>Precipitation: {items[2].percent_precipitation}%</td>
              <td>Precipitation: {items[3].percent_precipitation}%</td>
              <td>Precipitation: {items[4].percent_precipitation}%</td>
              <td>Precipitation: {items[5].percent_precipitation}%</td>
              <td>Precipitation: {items[6].percent_precipitation}%</td>
              <td>Precipitation: {items[7].percent_precipitation}%</td>
              <td>Precipitation: {items[8].percent_precipitation}%</td>
              <td>Precipitation: {items[9].percent_precipitation}%</td>
            </tr>
          </table>
        </div>
      );
    }
  }
}

export default Weather
