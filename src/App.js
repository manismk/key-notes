import { Route, Routes, useLocation } from "react-router-dom";
import { PrivateRoute } from "./components";
import {
  Archive,
  Error404,
  Landing,
  Login,
  NotesHome,
  Profile,
  SignUp,
  SingleLabel,
  Trash,
} from "./pages";
import { routes } from "./constant";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App container--100">
      <Routes>
        <Route path={routes.LANDING_PAGE} element={<Landing />} />
        <Route path={routes.LOGIN_PAGE} element={<Login />} />
        <Route path={routes.SIGNUP_PAGE} element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path={routes.HOME_PAGE} element={<NotesHome />} />
          <Route path={routes.ARCHIVE_PAGE} element={<Archive />} />
          <Route path={routes.TRASH_PAGE} element={<Trash />} />
          <Route path={routes.PROFILE_PAGE} element={<Profile />} />
          <Route
            path={`${routes.LABEL_PAGE}/:labelId`}
            element={<SingleLabel />}
          />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;
