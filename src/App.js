import react, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import ContactsPage from './containers/ContactsPage';
import AppointmentsPage from './containers/AppointmentsPage';
import Nav from './containers/Nav';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <switch>
      <Route path="/containers/ContactsPage" component={ContactsPage} />
      <Route path="/containers/AppointmentsPage" component={AppointmentsPage} />
      <Route path="/" exact component={HomePage} />
      </switch>
    </div>
    </Router>
  );
}

const HomePage = () => {
  return (
    <div>
      <h3>Home Page:</h3>
    </div>
  )
}

export default App;
