import React, {Component} from 'react';
import '../styles/index.css';
import Map from './Map'

class App extends Component {
    render() {
        return (
          <div className="map">
            <Map />
          </div>
        )
    }
}

export default App;
