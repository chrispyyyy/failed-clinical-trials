import React, { Component } from 'react';
import { Switch, Route  } from 'react-router-dom';
import { Redirect } from 'react-router';
import Home from './containers/Home/Home';
import NavigationBar from './containers/NavigationBar/NavigationBar';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <NavigationBar />
                <Switch>
                    <Route path="/failed-clinical-trials" component={Home} />
                    <Redirect from="/" to="/failed-clinical-trials"/>
                </Switch>
            </div>
        );
    }
}

export default App;
