import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import CountryDetail from "./components/CountryDetail/CountryDetail";
import Home from "./components/Home";
import Nomatch from "./components/NoMatch/Nomatch";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/country/:name">
              <CountryDetail/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="*">
              <Nomatch/>
            </Route>
        </Switch>
      </Router>

     
    </div>
  );
}

export default App;
