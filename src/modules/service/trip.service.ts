import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { ToastError, ToastSuccess } from "../components/toast/toast.component";
import { DB_TABLES } from "../consts/app_keys.const";

class TripService {
  public addTrip = async (
    from: string,
    to: string,
    carNumber: string,
    passengersAmount: number
  ) => {
    try {
      await addDoc(collection(db, DB_TABLES.TRIPS), {
        from,
        to,
        carNumber,
        passengersAmount,
      });
      ToastSuccess("Trip was successfully created!");
    } catch (e) {
      ToastError("Couldn't create a trip!");
      console.log(e);
    }
  };
}

export const tripService = new TripService();
