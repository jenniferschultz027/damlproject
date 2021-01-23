import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: []
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
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
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
            <td>{items[0].forecast.substring(0,3)}</td>
            <td>{items[1].forecast.substring(0,3)}</td>
            <td>{items[2].forecast.substring(0,3)}</td>
            <td>{items[3].forecast.substring(0,3)}</td>
            <td>{items[4].forecast.substring(0,3)}</td>
            <td>{items[5].forecast.substring(0,3)}</td>
            <td>{items[6].forecast.substring(0,3)}</td>
            <td>{items[7].forecast.substring(0,3)}</td>
            <td>{items[8].forecast.substring(0,3)}</td>
            <td>{items[9].forecast.substring(0,3)}</td>
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
          </table>
        </div>
      );
    }
  }
}

/*<tr>
<td>{items[0].percent_precipitation}</td>
<td>{items[1].percent_precipitation}</td>
<td>{items[2].percent_precipitation}</td>
<td>{items[3].percent_precipitation}</td>
<td>{items[4].percent_precipitation}</td>
<td>{items[5].percent_precipitation}</td>
<td>{items[6].percent_precipitation}</td>
<td>{items[7].percent_precipitation}</td>
<td>{items[8].percent_precipitation}</td>
<td>{items[9].percent_precipitation}</td>
</tr>
*/

export default Weather
