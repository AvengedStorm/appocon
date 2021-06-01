import react, {useState, useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }

  return (
    <div className="Nav">
      <nav>
          <Link style={navStyle} to="/">
          <h3 className="nav">AppoCon</h3>
          </Link>
          <ul className="nav-links">
              <Link style={navStyle} to="/containers/ContactsPage">
              <li className="nav">Contacts</li>
              </Link>
              <Link style={navStyle} to="/containers/AppointmentsPage">
              <li className="nav">Appointments</li>
              </Link>
          </ul>
      </nav>
    </div>
  );
}

export default Nav;