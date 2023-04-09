export const ROUTER_KEYS = {
  HOME: "/",
  LOGIN: "/login",
  USERS_EDITING: "/users_editing",
  TRIPS: "/trips",
  TRIP_CREATION: "/trip_creation",
};

export const NAVBAR_LINKS = [
  { name: "Home", ref: ROUTER_KEYS.HOME },
  { name: "Users editing", ref: ROUTER_KEYS.USERS_EDITING },
  { name: "Trip creation", ref: ROUTER_KEYS.TRIP_CREATION },
  { name: "Trips", ref: ROUTER_KEYS.TRIPS },
];

export const DB_TABLES = {
  USERS: "users",
  TRIPS: "trips",
};
