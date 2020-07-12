import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashboardPageComponent from './pages/DashboardPage';
import HomePageComponent from './pages/HomePage';
import HeaderComponent from './components/Header';
import { ROUTE } from './constants';
import './App.scss';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Router>
          <HeaderComponent />
          <Route
            exact
            path={ROUTE.HOME}
            component={HomePageComponent}
          />
          <Route
            exact
            path={ROUTE.DASHBOARD}
            component={DashboardPageComponent}
          />
        </Router>
      </div>
    );
  }
}

export default App;
