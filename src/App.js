import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Component/Header/Header';
import Banner from './Component/Banner/Banner'
import Breakfast from './Component/Breakfast/Breakfast';
import Lunch from './Component/Lunch/Lunch';
import Dinner from './Component/Dinner/Dinner';
import BreakfastDetails from './Component/BreakfastDetails/BreakfastDetails';
import DinnerDetails from './Component/DinnerDetails/DinnerDetails';
import { AuthContextProvider } from './Component/Login/useAuth';
import Login from './Component/Login/Login';
import LunchDetails from './Component/LunchDetails/LunchDetails';
import Cart from './Component/Cart/Cart';
import ShowCart from './Component/Cart/ShowCart';
import Features from './Component/Features/Features';
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <div>
      <AuthContextProvider>
      <Router>
      <Header></Header>   
        <Switch>
          <Route exact path="/">
            <Banner></Banner>
            <Breakfast></Breakfast>
            <ShowCart></ShowCart>
            <Features></Features>
            <Footer></Footer>
          </Route>
          <Route path="/breakfast">
            <Breakfast></Breakfast>
          </Route>
          <Route path="/lunch">
            <Lunch></Lunch>
          </Route>
          <Route path="/dinner">
            <Dinner></Dinner>
          </Route>
          <Route path="/login">
              <Login></Login>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route  path="/dinnerDetails/:foodkey">
            <DinnerDetails></DinnerDetails>
          </Route>
          <Route path="/breakfastDetails/:foodkey">
            <BreakfastDetails></BreakfastDetails>
          </Route>
          <Route path="/lunchDetails/:foodkey">
            <LunchDetails></LunchDetails>
          </Route>
        </Switch>
      </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
