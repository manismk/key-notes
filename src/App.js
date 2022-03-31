import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components";
import { Archive, Landing, Login, NotesHome, Profile, SignUp } from "./pages";

const App = () => {
  return (
    <div className="App container--100">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/app/notes" element={<NotesHome />} />
          <Route path="/app/archive" element={<Archive />} />

          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
