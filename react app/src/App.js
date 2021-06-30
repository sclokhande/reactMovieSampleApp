import React, { useState, useEffect } from 'react';
import './App.css';
import Greet from './components/Greet'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header'
import Feature from './components/Feature'
import Pricing from './components/Pricing'
import MovieList from './components/movie/MoviesList';
import AddMovie from './components/movie/AddMovie';
import MovieDetails from './components/movie/MovieDetails';
import NotFound from './components/404';
import EditMovie from './components/movie/EditMovie';
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";
import Parking from './components/Parking';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
          <Switch>
            {/* <Route path="/" exact > <Parking /> </Route> */}
            <Route path="/" exact > <MovieList /> </Route>
            <Route path="/addMovie" exact > <AddMovie /> </Route>
            <Route path="/movieDetail/:id" param={'id'}> <MovieDetails /> </Route>
            <Route path="/editMovie/:id" exact > <EditMovie /> </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
