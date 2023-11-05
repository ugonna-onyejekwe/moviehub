import "./details.scss";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import ShareIcon from "@mui/icons-material/Share";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import RiseLoader from "react-spinners/RiseLoader";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import YouTube from "react-youtube";

import { api } from "../../api";
import { Cast } from "../../components/cast";
import { Reviews } from "../../components/reviews";

export const Details = () => {
  const [movie_details, setMovie_details] = useState([]);
  const [cast_details, setCast_details] = useState([]);
  const [reviews_details, setReviews_details] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [current_triller, setCurrent_triller] = useState("jzQn0 - WH4WM");
  const [play, setPlay] = useState(false);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    setLoading(true);
    let res = await api.getMovies(`movie/${id}?append_to_response=videos`);
    let res2 = await api.getMovies(`movie/${id}/credits`);
    let res3 = await api.getMovies(`movie/${id}/reviews`);
    setMovie_details(res);
    setCast_details(res2.cast.slice(0, 10));
    setReviews_details(res3.results);
    setLoading(false);
  };

  const show_video = () => {
    window.location.reload(false);
  };

  const activate_triller = () => {
    let triller = movie_details.videos.results.find(
      (i) => i.name === "Official Trailer"
    );
    setCurrent_triller(triller);
    setPlay(!play);
  };

  return (
    <>
      {loading && (
        <div className="loader">
          <RiseLoader color={"hsl(57, 97%, 45%)"} size={10} />
        </div>
      )}

      {!loading && (
        <div className="details_section">
          <div
            className="details_container"
            style={{
              backgroundImage: `url(${api.imgoriginal(
                movie_details.backdrop_path
              )})`,
            }}
          >
            <div className="container">
              <div className="img">
                <img src={api.imgw500(movie_details.poster_path)} />
              </div>
              <div className="txt">
                <div>
                  <h2>{movie_details.title}</h2>
                  <p className="info">
                    <span className="language">
                      <StarIcon className="icon" />
                      {movie_details.vote_average?.toFixed(1)}
                    </span>
                    <span>
                      <CalendarMonthIcon className="icon" />
                      {movie_details.release_date?.slice(0, 4)}
                    </span>
                    <span>
                      <AccessTimeIcon className="icon" />
                      {movie_details.runtime} mins
                    </span>
                  </p>
                  <p className="genre">
                    {movie_details.genres?.map((i, key) => (
                      <span key={key}>#{i.name}</span>
                    ))}
                  </p>
                  <p className="overview">{movie_details.overview}</p>
                  <div className="box">
                    <span className="share">
                      <ShareIcon className="icon" />
                    </span>
                    <p>
                      Language:{" "}
                      {movie_details?.spoken_languages[0].english_name}
                    </p>
                    <button onClick={activate_triller}>
                      <PlayArrowIcon className="icon" />
                      watch
                    </button>
                  </div>
                </div>
                <div className="download_btn">
                  <button>
                    download <SystemUpdateAltIcon className="icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* play video section */}
          <div
            className={play ? "video_background active" : "video_background "}
          >
            <div className="container">
              <div className="heading">
                <h3 onClick={show_video}>
                  <KeyboardBackspaceIcon className="icon" />
                  back
                </h3>
                <button>
                  download <SystemUpdateAltIcon className="icon" />
                </button>
              </div>
              <div className="video">
                {current_triller ? (
                  <YouTube
                    videoId={current_triller.key}
                    className={"youtube"}
                    opts={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                ) : (
                  <h2 className="no_triller">no triller found</h2>
                )}
              </div>
            </div>
          </div>

          {/* cast section */}
          <div className="cast_section container">
            <Cast detail={cast_details} />
          </div>

          {/* review section */}
          <div className="review_section container">
            <Reviews detail={reviews_details} heading={movie_details.title} />
          </div>
        </div>
      )}
    </>
  );
};
