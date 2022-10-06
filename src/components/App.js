import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";
import SignIn from "./Auth/SignIn/SignIn";
import SignUp from "./Auth/SignUp/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
