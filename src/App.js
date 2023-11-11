import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../src/screens/Login/Login'
import Register from '../src/screens/Register/Register'
import Home from "./screens/Home/index";

const App = () => {
  const handleLogin = () => {
    window.location.href = "/register";
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login onclick={handleLogin}/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
