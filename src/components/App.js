import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./homeScreen/HomeScreen";
import SignIn from "./auth/SignIn/SignIn";
import SignUp from "./auth/SignUp/SignUp";
import MoviePage from "./movie/Movie";
import TvPage from "./tv/TV";
import SearchPage from "./searchList/SearchList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/tv/:id" element={<TvPage />} />
        <Route path="/search/:query" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}
