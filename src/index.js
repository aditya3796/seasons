import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import './SeasonDisplay.css';

class App extends React.Component {
    /*constructor(props) {
        super(props);
        //this is the only time we do direct assignment to this.state
        this.state = { lat: null, errorMessage: '' };//initializing state, null for default value    
    }*/
    state = { lat: null, lon: null, errorMessage: '' };

    

    componentDidMount() {        
        window.navigator.geolocation.getCurrentPosition(            
            position => this.setState({ lat: position.coords.latitude, lon: position.coords.longitude }),//to update the state, only setState() function is used
            err => this.setState({ errorMessage: err.message })            
        );                      
    }    
    
    renderContent() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage} </div>;
        }

        if(!this.state.errorMessage && this.state.lat){ 
            return <SeasonDisplay lat={this.state.lat} lon={this.state.lon} />            
        }

        return <Spinner message="Please accept location request" />;
    }

    render() {
        return (
        <div className="border red">
            {this.renderContent()}
        </div>
        );
        /*return (
        <div>
            Latitude: {this.state.lat}<br />
            Error: {this.state.errorMessage}
        </div>);*/
    }
}

ReactDOM.render(<App />,document.querySelector('#root'));