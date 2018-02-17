import React, { Component } from 'react';
import './App.css';
import HomePage from './designs/pages/HomePage'
import PortfolioPage from './designs/pages/Portfolio'
import ServicePage from './designs/pages/Service'

import BrandingPage from './designs/pages/services/Branding'
// import ProductPage from './designs/pages/services/Product'
// import WebPage from './designs/pages/services/Web'
import CommericalsPage from './designs/pages/services/Commericals'
// import TestimonialsPage from './designs/pages/services/Testimonials'
// import TrainingPage from './designs/pages/services/Training'
// import LiveEventPage from './designs/pages/services/LiveEvent'
// import MotionPage from './designs/pages/services/Motion'
// import SupportingPage from './designs/pages/services/Supporting'

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
              <Route
                exact path='/services'
                render={() => (<ServicePage/>)}
              />
              <Route
                exact path="/services/:id"
                render={({match}) => {
                  let renderMe;
                  switch(match.params.id){
                    case "branding":
                      renderMe = <BrandingPage/>
                      break;
                  case "commercials":
                      renderMe = <CommericalsPage/>
                      break;
                  default:
                      break;
                  }
                  console.log
                  return renderMe
                }
              }
              />
              <Route render={
                ({ location }) => <p>{ location.pathname } not found</p>
              } />
            </Switch>
          </main>
        </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
