import React from 'react';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import SingleUser from './components/users/SingleUser';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

function App() {




  return (
    <GithubState>
      <AlertState>

        <Router>
          <div className="App">
            <Navbar />

            <div className="container">

              <Alert />

              <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/user/:login" component={SingleUser} />

                <Route exact path="/about" component={About} />

                <Route component={NotFound} />
              </Switch>

            </div>

          </div>
        </Router>

      </AlertState>

    </GithubState>
  );



}

export default App;
