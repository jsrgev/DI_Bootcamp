import './App.css';
import NavBar from './components/NavBar'
import Main from './components/Main'
import Favorites from './components/Favorites'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';


function App() {
  return (
    <BrowserRouter>
      <div>
        <CssBaseline />
        <NavBar />
          {/*<Switch>*/}
          <Route exact path="/" component={Main} />
          <Route path="/favorites" component={Favorites} />
          {/*</Switch>*/}
      </div>
    </BrowserRouter>
  );
}

export default App;
