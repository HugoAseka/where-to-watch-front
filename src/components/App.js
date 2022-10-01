import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen.js";
import Login from "./Login/Login.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
