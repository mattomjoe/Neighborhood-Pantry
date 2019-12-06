// New - import the React Router components, and the Profile page component
import React, { Component } from ".react";
import NavBar from "./components/Nav";
import { Router, Route, Switch } from "react-router-dom";
// import Profile from "./components/Profile";
import { Navbar, Button } from 'react-bootstrap';
// import PrivateRoute from "./components/PrivateRoute";
import './App.css';


class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Auth0 - React</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </Navbar.Header>
        </Navbar>
      {/* Don't forget to include the history module */}
      {/* <Router history={history}> */}
            <Router>

        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          {/* <PrivateRoute path="/profile" component={Profile} /> */}
        </Switch>
      </Router>
    </div>
    );
  }
}

export default App;
