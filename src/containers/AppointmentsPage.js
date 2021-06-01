import React from 'react';
import react, {useState, useEffect} from 'react';
import DatePicker from "react-datepicker";
import {DatePickerComponent} from "@syncfusion/ej2-react-calendars";

class AppointmentsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedAppo: [
        {
          title: "",
          description: "",
          address: "",
          date: ""
        }
      ]
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handledescriptionChange = this.handledescriptionChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderContacts = this.renderAppos.bind(this);
  }

  handleTitleChange(a) {
    this.setState({title: a.target.value})
  }

  handledescriptionChange(b) {
    this.setState({description: b.target.value})
  }

  handleAddressChange(c) {
    this.setState({address: c.target.value})
  }

  handleDateChange(d) {
    this.setState({date: d.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const contact = {
      title: this.state.title,
      description: this.state.description,
      address: this.state.address,
      date: this.state.date
    }
    this.setState({...this.state, savedAppo: [...this.state.savedAppo, contact]})
    this.setState({
      title: "",
      description: "",
      address: "",
      date:""
    })
  }

  renderAppos() {
    return this.state.savedAppo.map((contact, index) => {
      const {title: title, description: description, address: address, date: date} = contact
      return (
        <tr>
          <td>{title}</td>
          <td>{description}</td>
          <td>{address}</td>
          <td>{date}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <div>
          <h2>Appointments Page:</h2>
          <form>
            <h2>Appointment:</h2>
            <label htmlFor="title">Title: </label>
            <input id="title" name="title" type="text" value={this.state.title} onChange={this.handleTitleChange} placeholder="Appointment's title"/>
              <br/>
            <label htmlFor="description">Description: </label>
            <input id="description" name="description" type="description" value={this.state.description} onChange={this.handledescriptionChange} placeholder="Appointment's description"/>
              <br/>
            <label htmlFor="address">Address: </label>
            <input id="address" name="address" type="text" value={this.state.address} onChange={this.handleAddressChange} placeholder="Appointment's address"/>
              <br/>
            <label htmlFor="date">Date: </label>
            <input id="date" name="date" type="date-picker" value={this.state.date} onChange={this.handleDateChange} placeholder="Appointment's date"/>
             <br/>
            <button onClick={this.handleSubmit}>Save Appointment!</button>
          </form>
        </div>
        <div>
            <h1>Appointments Table:</h1>
            <table id='appo'>
              <thead style={{fontWeight:"bold"}}>
                <tr>
                  <td>TITLE</td>
                  <td>DESCRIPTION</td>
                  <td>ADDRESS</td>
                  <td>Date</td>
                </tr>
              </thead>
               <tbody>
                  {this.renderAppos()}
               </tbody>
            </table>
         </div>
      </div>
    )
  }
}

export default AppointmentsPage;