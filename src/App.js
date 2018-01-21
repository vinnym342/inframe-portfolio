import React, { Component } from 'react';
import './App.css';
import HomePage from './designs/pages/HomePage'
import PortfolioPage from './designs/pages/Portfolio'
import NavBar from './designs/organisms/NavBar'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
        <Router>
          <main>
          <NavBar/>
            <Switch>
              <Route
                exact path='/'
                render={() => (<HomePage/>)}
              />
              <Route
                exact path='/portfolio'
                render={() => (<PortfolioPage/>)}
              />
            </Switch>
          </main>
        </Router>
        </MuiThemeProvider>  
      </div>
    );
  }
}

export default App;
