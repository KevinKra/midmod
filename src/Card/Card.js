import React from "react";

export default function Card(props) {
  return (
    <article className="guest-card">
      <h1>{props.name}</h1>
      <p>{props.date}</p>
      <p>{props.time} pm</p>
      <p>Number of guests: {props.number}</p>
      <button onClick={() => props.deleteReservation(props.id)}>
        Cancel me
      </button>
    </article>
  );
}
