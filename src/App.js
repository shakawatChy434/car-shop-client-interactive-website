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
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import ServiceBody from './pages/ServiceBooking/ServiceBody/ServiceBody';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/home"><Home /></Route>
            <PrivateRoute path="/product"><ProductCollection /></PrivateRoute>
            <PrivateRoute path="/booking/:id/:name/:img"><ServiceBody /> </PrivateRoute>
            <Route path="/login"><LoginCollection /> </Route>
            <Route path="/register"><RegisterCollection /> </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
