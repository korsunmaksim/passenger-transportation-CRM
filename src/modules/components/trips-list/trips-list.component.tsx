import React from "react";
import { ITrip } from "../../types/auth.type";
import { DocumentData } from "firebase/firestore";

interface ITripsListProps {
  trips: ITrip[] | DocumentData[] | undefined;
}

export const TripsList = ({ trips }: ITripsListProps) => {
  if (!trips)
    return <h1 className="m-auto mt-4 text-center">Something went wrong</h1>;

  if (trips.length === 0)
    return (
      <h1 className="m-auto mt-4 text-center">There are no active trips</h1>
    );

  return (
    <div className="d-flex flex-column mt-5 p-2">
      {trips.map((trip) => (
        <div className="trips d-flex justify-content-around my-2">
          <h4 className="trip">Car number: {trip.carNumber}</h4>
          <h4 className="trip">From: {trip.from}</h4>
          <h4 className="trip">To: {trip.to}</h4>
          <h4 className="trip">Passengers: {trip.passengersAmount}</h4>
        </div>
      ))}
    </div>
  );
};
