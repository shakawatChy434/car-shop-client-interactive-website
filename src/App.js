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
import NotFoundpage from './pages/NotFound/NotFoundpage';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import AddService from './pages/AddService/AddService';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/home"><Home /></Route>
            <PrivateRoute path="/product"><ProductCollection /></PrivateRoute>
            <PrivateRoute path="/booking/:id"><ServiceBody /> </PrivateRoute>
            <PrivateRoute path="/deshboard"><Dashboard /></PrivateRoute>
            <Route path="/login"><LoginCollection /> </Route>
            <Route path="/register"><RegisterCollection /> </Route>

            <Route path="/addService"><AddService /></Route>
            <Route path="*"><NotFoundpage></NotFoundpage> </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
