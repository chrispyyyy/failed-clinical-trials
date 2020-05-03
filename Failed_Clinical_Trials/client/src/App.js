import React, { Component } from 'react';
import { Switch, Route  } from 'react-router-dom';
import Home from './containers/Home/Home';
import NavigationBar from './containers/NavigationBar/NavigationBar';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <NavigationBar />
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        );
    }
}

export default App;
