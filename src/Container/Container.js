import React from "react";
import Card from "../Card/Card";

export default function Container(props) {
  return (
    <section className="container">
      {props.reservations.map(reservations => {
        return (
          <Card
            name={reservations.name}
            date={reservations.date}
            time={reservations.time}
            number={reservations.number}
            key={reservations.id}
            id={reservations.id}
            deleteReservation={props.deleteReservation}
          />
        );
      })}
    </section>
  );
}
