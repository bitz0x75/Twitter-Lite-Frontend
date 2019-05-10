import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import '../src/assets/styles/App.css';
import Index from './containers/Home.jsx';
import Login from './containers/Authentication';
import Error from './components/Error';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route 
            path="/home/" 
            render = { props => localStorage.getItem('user') ? (<Index /> ) : (<Redirect to='/'/>) }/>
          <Route path="/signup" exact component={Login} />
          <Route path="/" exact component={Login} />
          <Route path='/error' exact component={Error} />
        </div>
      </Router>
    );
  }
}

export default App;
