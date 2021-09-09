import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { Navbar } from './components/navbar/Navbar';
import { Sidebar } from './components/sidebar/Sidebar';

import { About } from './components/about/About';
import { Resume } from './components/resume/Resume';
import { Projects } from './components/project/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Sidebar />
            </div>
            <div className="col-lg-9 app_main-content">
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <About />
                </Route>
                <Route path="/resume" component={Resume} />
                <Route path="/projects" component={Projects} />
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
