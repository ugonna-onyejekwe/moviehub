import { Link } from "react-router-dom";
import { api } from "../../src/api";

import StarIcon from "@mui/icons-material/Star";

export const Popular_movies = (props) => {
  return (
    <>
      <section className="heading">
        <div className="title">
          <p>online streaming</p>
          <h2>popular movies</h2>
        </div>
        <div className="nav">
          <button>movies</button>
          <button>tv show</button>
          <button>anime</button>
        </div>
      </section>

      <div className="wrapper">
        {props.movies.map((i, key) => {
          return (
            <div key={key} className="movie_box">
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
    </>
  );
};
