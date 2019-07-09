import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
// PAGES
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import ErrorPage from './pages/Error';
//Router
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
