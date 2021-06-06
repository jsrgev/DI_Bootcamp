import './App.css';
import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";


const HomeScreen = () => {
  return <h1>Home</h1>;
}

const ProfileScreen = () => {
  return <h1>Profile</h1>;
}

const ShopScreen = () => {
  throw new Error ("this is an Error");
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {};
  }
  render() {
      return (
        <BrowserRouter>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/shop">Shop</NavLink>
          </nav>
          
            <Switch>
              <Route path="/profile">
          <ErrorBoundary>
                <ProfileScreen />
          </ErrorBoundary>
              </Route>
              <Route path="/shop">
          <ErrorBoundary>
                <ShopScreen />
          </ErrorBoundary>
              </Route>
              <Route path="/">
          <ErrorBoundary>
                <HomeScreen />
          </ErrorBoundary>
              </Route>
            </Switch>

        </BrowserRouter>
    );
  }
}

export default App;
