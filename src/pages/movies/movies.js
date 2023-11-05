import "./movies.scss";

import StarIcon from "@mui/icons-material/Star";

import { api } from "../../api";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import RiseLoader from "react-spinners/RiseLoader";

export const Movies = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [page_total, setPage_total] = useState(0);
  const [num, setNum] = useState(0);
  const [result, setResult] = useState("");
  const location = useLocation();
  const { key } = location.state ? location.state : false;

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    let res = await api.getMovies(
      `${
        key
          ? `search/movie?query=${key}&page=${page}`
          : `discover/movie?page=${page}`
      }`
    );
    setList(res.results);
    setNum(res.results.length);
    setPage_total(res.total_pages);
    setResult(res.total_results);
    console.log(res);
  };

  const loadmore = async () => {
    let res = await api.getMovies(
      `${
        key
          ? `search/movie?query=${key}&page=${page + 1}`
          : `discover/movie?page=${page + 1}`
      }`
    );
    setList([...list, ...res.results]);
    setNum(num + res.results.length);
    setPage(page + 1);
    console.log(list);
  };

  if (list.length !== 0 && result !== 0) {
    return (
      <div className="movies_section">
        <div className="filter_container container">
          <div className="box">
            <select name="category">
              <option value="category" selected>
                sort by category
              </option>
              <option value="romance">romance</option>
              <option value="action">action</option>
              <option value="horror">horror</option>
              <option value="comedy">comedy</option>
              <option value="adventure">adventure</option>
              <option value="sport">sport</option>
              <option value="fantacy">fantacy</option>
            </select>
          </div>

          {/* box2 */}
          <div className="box">
            <select name="year">
              <option value="year" selected>
                sort by year
              </option>
              <option value="1700 - 1800">1700 - 1800</option>
              <option value="1800 - 1900">1800 - 1900</option>
              <option value="1900 - 2000">1900 - 2000</option>
              <option value="2000 - 2010">2000 - 2010</option>
              <option value="2010 - 2023">2010 - 2023</option>
            </select>
          </div>

          {/* box3 */}
          <div className="box">
            <select name="duration">
              <option value="duration" selected>
                sort by duration
              </option>
              <option value="1 - 5 hours">1 - 5 hours</option>
              <option value="5 - 10 hours">55 - 10hours</option>
              <option value="10 - 15 hours">10 - 15 hours</option>
              <option value="15 - 20 hours">15 - 20 hours</option>
            </select>
          </div>

          {/* box4 */}
          <div className="box">
            <select name="rating">
              <option value="rating" selected>
                sort by rating
              </option>
              <option value="1 star">1 star</option>
              <option value="2 stars">2 stars</option>
              <option value="3 stars">3 stars</option>
              <option value="4 stars">4 stars</option>
              <option value="5 stars">5 stars</option>
            </select>
          </div>
        </div>

        <div className="movies_container container">
          <h4 className="result">
            Total of <span>{num}</span> items found
          </h4>
          <div className="wrapper">
            {list.map((i, key) => {
              return (
                <div className="movie_box" key={key}>
                  <Link to={`/details/${i.id}`}>
                    <div className="img">
                      <img src={api.imgw500(i.poster_path)} />
                    </div>
                    <div className="txt">
                      <div>
                        <h3>{i.original_title}</h3>
                        <h4>{i.original_language}</h4>
                      </div>

                      <div>
                        <p>{i.release_date.slice(0, 4)}</p>
                        <p>
                          <StarIcon className="icon" />
                          {i.vote_average.toFixed(1)}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          {page_total > page && (
            <div className="btn">
              <button onClick={loadmore}>load more</button>
            </div>
          )}
        </div>
      </div>
    );
  } else if (result === 0) {
    return (
      <>
        <h2 className="result_not_found">result for "{key}" not found</h2>
      </>
    );
  } else {
    return (
      <div className="loader">
        <RiseLoader color={"hsl(57, 97%, 45%)"} size={10} />
      </div>
    );
  }
};
