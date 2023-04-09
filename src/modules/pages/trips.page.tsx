import { collection } from "firebase/firestore";
import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import { DB_TABLES } from "../consts/app_keys.const";
import { TripsList } from "../components/trips-list/trips-list.component";
import { Loading } from "../components/loading/loading.component";

const Trips = () => {
  const [trips, loading, error] = useCollectionData(
    collection(db, DB_TABLES.TRIPS)
  );

  if (loading) return <Loading />;
  if (error)
    return <h1 className="m-auto mt-4 text-center">{JSON.stringify(error)}</h1>;

  return (
    <div
      className="w-75 bg-white mx-auto mt-4 rounded text-black"
      style={{ minHeight: "80vh" }}
    >
      <h1 className="text-center">Trips</h1>
      <TripsList trips={trips} />
    </div>
  );
};

export default Trips;
