import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../src/screens/Login/Login'
import Register from '../src/screens/Register/Register'
import Home from "./screens/Home/index";
import News from "./screens/News";

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
        <Route path="news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
