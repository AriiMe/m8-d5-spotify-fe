import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Search from "./components/Search";
import YourLibrary from "./components/YourLibrary";
import AlbumPage from "./components/AlbumPage";
import PlayerBar from "./components/PlayerBar";
import SignInPage from "./components/SingInPage";
import ArtistPage from "./components/ArtistPage";
import LogIn from "./components/LogIn";

function App() {
  return (
    <Router>
      <Route path='/login' exact component={LogIn} />
      <Route path='/signup' exact component={SignInPage} />
      <Route path='/' component={Navigation} />
      <Route path='/home' exact component={Home} />
      <Route path='/search' exact component={Search} />
      <Route path='/library' exact component={YourLibrary} />
      <Route path='/album/' component={AlbumPage} />
      <Route path='/artist/:id' component={ArtistPage} />
      <Route path='/' component={PlayerBar} />
    </Router>
  );
}

export default App;
