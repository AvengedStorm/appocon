import react, {useState, useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
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
      <h1>Welcome to AppoCon!</h1>
      <div>
        <h2 style={{fontWeight: "normal"}}>
          At this site you can save your own contacts and own appointments for later use!<br/>
          for your own convenience you can go to your desired place through the navigation bar.
        </h2>
      </div>
    </div>
  )
}

export default App;
