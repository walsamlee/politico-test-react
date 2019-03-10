import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Landing from './components/Landing';
import Footer from './components/Footer';
import NotFound from './components/Notfound';

import Parties from './containers/Parties';
import Login from './containers/Login';
import ViewParty from './containers/ViewParty';
import CreateParty from './containers/CreateParty';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/parties" component={Parties}/>
          <Route exact path="/parties/create" component={CreateParty}/>
          <Route path="/parties/:id" component={ViewParty}/>
          <Route path="/login" component={Login}/>
          <Route path="*" component={NotFound}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
