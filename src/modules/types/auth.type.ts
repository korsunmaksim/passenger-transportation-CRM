export interface IUser {
  id: string;
  email: string;
  role: string;
}

export interface ITrip {
  from: string;
  to: string;
  carNumber: string;
  passengersAmount: number;
}
