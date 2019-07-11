import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav/Nav";
import Container from "./Container/Container";

class App extends Component {
  state = {
    reservations: []
  };

  componentDidMount() {
    this.fetchData();
  }

  addReservation = async (inputState, e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    e.currentTarget.reset();
    // how to reset form...
    const id = Date.now();
    const response = await fetch("http://localhost:3001/api/v1/reservations", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(inputState)
    });
    const newReservation = await response.json();
    this.setState({
      reservations: [...this.state.reservations, { ...newReservation, id }]
    });
  };

  deleteReservation = async id => {
    await fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: "DELETE"
    });
    this.fetchData();
  };

  fetchData = async () => {
    const response = await fetch("http://localhost:3001/api/v1/reservations");
    const parse = await response.json();
    this.setState({ reservations: parse });
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <Nav className="resy-form" updateReservations={this.addReservation} />
        <Container
          className="resy-container"
          reservations={this.state.reservations}
          deleteReservation={this.deleteReservation}
        />
      </div>
    );
  }
}

export default App;
