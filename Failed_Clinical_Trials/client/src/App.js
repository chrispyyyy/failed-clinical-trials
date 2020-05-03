import React, { Component } from 'react';
import Home from './containers/Home/Home';
import NavigationBar from './containers/NavigationBar/NavigationBar';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <NavigationBar />
                <Home/>
            </div>
        );
    }
}

export default App;
