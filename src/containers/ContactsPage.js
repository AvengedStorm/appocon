import React from 'react';
import react, {useState, useEffect} from 'react';

class ContactsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedContacts: [
        {
          firstName: "",
          lastName: "",
          phoneNumber: ""
        }
      ]
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePNumberChange = this.handlePNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderContacts = this.renderContacts.bind(this);
  }

  handleNameChange(a) {
    this.setState({firstName: a.target.value})
  }

  handleLastNameChange(b) {
    this.setState({lastName: b.target.value})
  }

  handlePNumberChange(c) {
    this.setState({phoneNumber: c.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const contact = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber
    }
    this.setState({...this.state, savedContacts: [...this.state.savedContacts, contact]})
    this.setState({
      firstName: "",
      lastName: "",
      phoneNumber: ""
    })
  }

  renderContacts() {
    return this.state.savedContacts.map((contact, index) => {
      const {firstName, lastName, phoneNumber} = contact
      return (
        <tr>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{phoneNumber}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <div>
          <h2>Contacts Page:</h2>
          <form>
            <h2>Contact:</h2>
            <label htmlFor="firstName">First Name: </label>
            <input id="firstName" name="firstName" type="text" value={this.state.firstName} onChange={this.handleNameChange} placeholder="Contact's first name"/>
              <br/>
            <label htmlFor="lastName">Last Name: </label>
            <input id="lastName" name="lastName" type="lastName" value={this.state.lastName} onChange={this.handleLastNameChange} placeholder="Contact's last name"/>
              <br/>
            <label htmlFor="phoneNumber">Phone Number: </label>
            <input id="phoneNumber" name="phoneNumber" type="text" value={this.state.phoneNumber} onChange={this.handlePNumberChange} placeholder="Contact's phone"/>
              <br/>
            <button onClick={this.handleSubmit}>Save data!</button>
          </form>
        </div>
        <div>
            <h1>Contacts Table</h1>
            <table id='contacts'>
              <thead style={{fontWeight:"bold"}}>
                <tr>
                  <td>FIRST NAME</td>
                  <td>LAST NAME</td>
                  <td>PHONE NUMBER</td>
                </tr>
              </thead>
               <tbody>
                  {this.renderContacts()}
               </tbody>
            </table>
         </div>
      </div>
    )
  }
}

export default ContactsPage;