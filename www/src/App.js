import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import './app.css';

import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';

import config_data from './config.json';

import { withAuthenticator } from '@aws-amplify/ui-react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

Amplify.configure({
  Auth: {
    'identityPoolRegion': config_data.aws.region,
    'userPoolId': config_data.aws.cognito.user_pool_id,
    'userPoolWebClientId': config_data.aws.cognito.user_pool_web_client_id,
    'mandatorySignIn': true,
    'authenticationFlowType': 'USER_SRP_AUTH',
  }
})

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">< Home /></Route>
          <Route path="/login">< Login /></Route>
          <NotFound />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Home</h1>
      </Jumbotron>
    </Container>
  );
}

function Login() {
  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Login</h1>
      </Jumbotron>
    </Container>
  );
}

function NotFound() {
  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">404 / Not Found</h1>
      </Jumbotron>
    </Container>
  );
}

export default withAuthenticator(App);
