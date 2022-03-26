import { Route, Routes } from "react-router-dom";
import { Home, Login, SignUp } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
