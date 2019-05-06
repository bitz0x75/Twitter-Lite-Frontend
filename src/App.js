import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../src/assets/styles/App.css';
import Index from './components/Home.jsx';
import Login from './components/Login.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path="/home/" component={Index} />
          <Route path="/signup" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
