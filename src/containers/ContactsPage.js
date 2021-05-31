import React from 'react';
import react, {useState, useEffect} from 'react';

class ContactsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: "",
        lastName: "",
        phoneNumber: ""
    }
  }

  handleNameChange(e) {
    this.setState({firstName: e.target.value})
  }
  handleLastNameChange(e) {
    this.setState({lastName: e.target.value})
  }
  handlePNumberChange(e) {
    this.setState({pNumber: e.target.value})
  }

  render() {
    return (
      <div>
      <h2>Contacts Page:</h2>
      <form>
        <h2>Contact:</h2>
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" name="firstName" type="text" />
          <br/>
        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName" name="lastName" type="lastName" />
          <br/>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input id="phoneNumber" name="phoneNumber" type="text" />
          <br/>
        <button>Send data!</button>
      </form>
      </div>
    )
  }
}

export default ContactsPage;