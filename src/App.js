import React, { Component } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { withAuth0 } from '@auth0/auth0-react';
import Favourites from './components/Favourites';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <>

        <Header isAth={this.props.auth0.isAuthenticated} />
        
        <Router>
          <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          
          <Route exact path="/Favourites">
            <Favourites/>
          </Route>

          
          </Switch>
        </Router>
        <Footer/>
      </>
    )
  }
}

export default withAuth0(App)
