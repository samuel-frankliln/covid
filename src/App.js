import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './components/App.css';
import Home from './components/Home';
import contact from './components/contact';
import notification from './components/notification';
import hospital from './components/hospital';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/contact' component={contact} exact />
            <Route path='/notification' component={notification} />
            <Route path='/hospital' component={hospital} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
