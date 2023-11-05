import "./home.scss";

import { useEffect, useState } from "react";
import RiseLoader from "react-spinners/RiseLoader";

import { api } from "../../api";
import { Hero } from "../../components/hero";
import { Upcoming_movies } from "../../components/upcoming-movies";
import { Popular_movies } from "../../components/popular-movies";
import { Our_app } from "../../components/ourapp";

export const Home = () => {
  const [hero_movies, setHero_movies] = useState([]);
  const [upcoming_list, setUpcoming_list] = useState([]);
  const [popular_list, setPopular_list] = useState([]);
  const hero_arr = [];

  useEffect(() => {
    get_hero();
  }, []);

  const get_hero = async () => {
    let res1 = await api.getMovies("movie/763165");
    let res2 = await api.getMovies("movie/762430");
    let res3 = await api.getMovies("movie/603692");
    let res4 = await api.getMovies("movie/1008042");
    let upcoming_res = await api.getMovies("movie/upcoming");
    let popular_res = await api.getMovies("movie/popular");

    hero_arr.push(res1, res2, res3, res4);

    setHero_movies([...hero_arr]);
    setUpcoming_list(upcoming_res.results.slice(0, 10));
    setPopular_list(popular_res.results.slice(0, 12));
  };

  if (
    hero_movies.length !== 0 &&
    upcoming_list.length !== 0 &&
    popular_list.length !== 0
  ) {
    return (
      <div className="home ">
        <div className="hero container">
          <Hero movies={hero_movies} />
        </div>
        <div className="upcoming_movies container">
          <Upcoming_movies movies={upcoming_list} />
        </div>
        <div className="app container">
          <Our_app />
        </div>
        <div className="popular_movies container">
          <Popular_movies movies={popular_list} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="loader">
        <RiseLoader color={"hsl(57, 97%, 45%)"} size={10} />
      </div>
    );
  }
};
