import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ROUTER_KEYS } from "../consts/app_keys.const";
import { MainLayout } from "../layouts/main_layout";
import { UsersEditing } from "../pages/users_editing.page";
import { TripCreation } from "../pages/trip_creation.page";
import { Home } from "../pages/home.page";
import { Login } from "../pages/login.page";
import { Loading } from "../components/loading/loading.component";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import Trips from "../pages/trips.page";

export const MainRouter = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <Loading />;
  if (error) return <h1>{error.message}</h1>;

  return (
    <Router>
      {user ? (
        <MainLayout>
          <Routes>
            <Route path={ROUTER_KEYS.HOME} element={<Home />} />
            <Route
              path={ROUTER_KEYS.USERS_EDITING}
              element={<UsersEditing />}
            />
            <Route
              path={ROUTER_KEYS.TRIP_CREATION}
              element={<TripCreation />}
            />
            <Route path={ROUTER_KEYS.TRIPS} element={<Trips />} />
            <Route
              path="*"
              element={<Navigate to={ROUTER_KEYS.HOME} replace />}
            />
          </Routes>
        </MainLayout>
      ) : (
        <Routes>
          <Route path={ROUTER_KEYS.HOME} element={<Login />} />
          <Route
            path="*"
            element={<Navigate to={ROUTER_KEYS.HOME} replace />}
          />
        </Routes>
      )}
    </Router>
  );
};
