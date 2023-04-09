import React, { useState } from "react";
import { TripInput } from "../components/trip_input/trip_input.components";
import { tripService } from "../service/trip.service";
import { ToastContainer } from "react-toastify";
import { ToastWarning } from "../components/toast/toast.component";

export const TripCreation = () => {
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [carNumber, setCarNumber] = useState<string>("");
  const [passengersAmount, setPassengersAmount] = useState<number>(0);

  const createTrip = async () => {
    if (
      from.length > 2 &&
      passengersAmount > 0 &&
      to.length > 2 &&
      carNumber.length === 8
    ) {
      await tripService.addTrip(from, to, carNumber, passengersAmount);
      setFrom("");
      setTo("");
      setCarNumber("");
      setPassengersAmount(0);
    } else ToastWarning("Check data!");
  };

  return (
    <div className="mt-5 w-100">
      <div
        className="d-flex flex-column w-75 bg-white mx-auto rounded text-black p-3"
        style={{
          height: "60vh",
        }}
      >
        <span className="my-3 mx-auto fs-2"> Create a new trip</span>
        <TripInput name="From" value={from} setValue={setFrom} />
        <TripInput name="To" value={to} setValue={setTo} />
        <TripInput
          name="Car number"
          value={carNumber}
          setValue={setCarNumber}
        />
        <TripInput
          name="Amount of passangers"
          value={passengersAmount}
          setValue={setPassengersAmount}
        />
        <button className="my-10 m-auto " onClick={createTrip}>
          Create trip
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};
