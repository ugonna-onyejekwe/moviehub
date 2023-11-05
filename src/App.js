import "./App.scss";
import { useEffect } from "react";

import { api } from "./api";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Movies } from "./pages/movies/movies";
import { Nav_bar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { Details } from "./pages/details/details";
import { About } from "./pages/about/about";
import { Contact } from "./pages/contact/contact";
import { SignUp } from "./pages/signup/signup";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Nav_bar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/search" element={<Movies />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
