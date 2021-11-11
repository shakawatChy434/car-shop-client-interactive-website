import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import ProductCollection from './pages/ProductCollection/ProductCollection/ProductCollection';
import LoginCollection from './pages/Login/LoginCollection/LoginCollection';
import RegisterCollection from './pages/Login/RegisterCollection/RegisterCollection';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/home"><Home /></Route>
          <Route path="/product"><ProductCollection /> </Route>
          <Route path="/login"><LoginCollection /> </Route>
          <Route path="/register"><RegisterCollection /> </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
