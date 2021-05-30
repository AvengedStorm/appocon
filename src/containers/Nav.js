import react, {useState, useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    }

  return (
    <div className="Nav">
      <nav>
          <Link style={navStyle} to="/">
          <h3>AppoCon</h3>
          </Link>
          <ul className="nav-links">
              <Link style={navStyle} to="/containers/ContactsPage">
              <li>Contacts</li>
              </Link>
              <Link style={navStyle} to="/containers/AppointmentsPage">
              <li>Appointments</li>
              </Link>
          </ul>
      </nav>
    </div>
  );
}

export default Nav;