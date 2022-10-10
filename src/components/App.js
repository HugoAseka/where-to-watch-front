import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";
import SignIn from "./Auth/SignIn/SignIn";
import SignUp from "./Auth/SignUp/SignUp";
import MoviePage from "./Movie/Movie";
import TvPage from "./TV/TV";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/tv/:id" element={<TvPage />} />
      </Routes>
    </BrowserRouter>
  );
}
