import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import "swiper/css/autoplay";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { Link } from "react-router-dom";
import { api } from "../../src/api";

export const Hero = (props) => {
  return (
    <>
      <Swiper
        className="wrapper"
        modules={[Autoplay]}
        direction="vertical"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        speed={1200}
      >
        {props.movies.map((i, key) => {
          return (
            <SwiperSlide
              key={key}
              className="box"
              style={{
                backgroundImage: `url(${api.imgoriginal(i.backdrop_path)})`,
              }}
            >
              <div className="txt">
                <h1>{i.original_title}</h1>
                <div className="info">
                  <p>{i.genres[0].name}</p>

                  <p>
                    <CalendarMonthIcon className="icon" /> {i.release_date}
                  </p>
                  <p>
                    <AccessTimeIcon className="icon" /> {i.runtime}mins
                  </p>
                </div>

                <Link to={`/details/${i.id}`}>
                  <button>
                    <PlayArrowIcon className="icon" />
                    watch now
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
