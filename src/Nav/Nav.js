import React, { Component } from "react";

export default class Nav extends Component {
  state = {
    name: "",
    time: "",
    date: "",
    number: ""
  };

  collectInputs = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <nav>
        <form onSubmit={e => this.props.updateReservations(this.state, e)}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.collectInputs}
            value={this.state.name}
          />
          <input
            type="text"
            name="date"
            placeholder="Date (mm/dd)"
            onChange={this.collectInputs}
            value={this.state.date}
          />
          <input
            type="text"
            name="time"
            placeholder="Time"
            onChange={this.collectInputs}
            value={this.state.time}
          />
          <input
            type="text"
            name="number"
            placeholder="Number of guests"
            onChange={this.collectInputs}
            value={this.state.number}
          />
          <button>Make Reservation</button>
        </form>
      </nav>
    );
  }
}
