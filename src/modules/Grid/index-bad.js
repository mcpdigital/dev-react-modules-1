import React from 'react';
// import MapContainer from './src/MapContainer';
import './Jupyter.css';
import Grid from './Grid';



class Jupyter extends React.Component {
    state = {
      items: []
    }
  
    componentDidMount() {
      fetch('/api/items')
        .then(response => response.json())
        .then(items => this.setState({ items }));
    }
  
    render() {
      const { items } = this.state;
  
      return (
        <div>
          <h1>My Portfolio</h1>
          <Grid items={items} />
        </div>
      );
    }
  }
  
  export default Jupyter;