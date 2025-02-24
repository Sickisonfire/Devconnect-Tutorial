import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

//token handling
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  // zuständig für token beim ersten laden der seite
  // [] am ende damit useEffect nur einmal läuft
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    // Fragment ist ghost element - wird nicht angezeigt
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
