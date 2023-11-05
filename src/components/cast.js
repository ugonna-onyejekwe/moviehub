import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import GroupIcon from "@mui/icons-material/Group";

import { api } from "../api";

export const Cast = (props) => {
  return (
    <>
      <h2>
        <GroupIcon className="icon" /> cast
      </h2>
      <Swiper
        className="wrapper"
        modules={[Autoplay]}
        direction="horizontal"
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
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
        {props.detail.map((i, key) => {
          return (
            <SwiperSlide key={key} className="box">
              <div className="img">
                <img src={api.imgw500(i.profile_path)} />
              </div>

              <div className="txt">
                <h4>{i.original_name}</h4>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
