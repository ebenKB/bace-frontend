import './App.css';
import Signup from './signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './welcome';
import Login from './login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
