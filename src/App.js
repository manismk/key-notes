import { Route, Routes } from "react-router-dom";
import { Landing, Login, NotesHome, SignUp } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/app/notes" element={<NotesHome />} />
      </Routes>
    </div>
  );
};

export default App;
