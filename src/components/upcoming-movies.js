import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import StarIcon from "@mui/icons-material/Star";

import { Link } from "react-router-dom";
import { api } from "../../src/api";

export const Upcoming_movies = (props) => {
  return (
    <>
      <section className="heading">
        <div className="title">
          <p>online streaming</p>
          <h2>upcoming movies</h2>
        </div>
        <div className="nav">
          <button>movies</button>
          <button>tv show</button>
          <button>anime</button>
        </div>
      </section>

      <Swiper
        className="wrapper"
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1200}
        breakpoints={{
          500: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
          },

          900: {
            slidesPerView: 4,
          },
        }}
      >
        {props.movies.map((i, key) => {
          return (
            <SwiperSlide key={key} className="movie_box">
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
