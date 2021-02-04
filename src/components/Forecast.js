import React from 'react';
import Day from './Day';

class Forecast extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
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
            } 
          )
          .catch(error => {console.error('Error');
          throw error;
        });
      }

    render() {
        const { isLoaded, items } = this.state;
        if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
            return (
                <div className = 'forecast' id = 'key'>
                    {this.state.items.map((day, id) => {
                        return <Day date = {day.date} low = {day.low_temp} high = {day.high_temp} forecast = {day.forecast} prec = {day.percent_precipitation} key = {id}/>
                    })}
                </div>
            )
        }
    }   
}

export default Forecast;