import "./about.scss";
import img from "../../img/bg1.jpg";

import { api } from "../../api";
import { useEffect, useState } from "react";
import RiseLoader from "react-spinners/RiseLoader";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

export const About = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    setLoading(true);
    let res = await api.getMovies(`movie/980489`);
    setMovie(res);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div className="loader">
          <RiseLoader color={"hsl(57, 97%, 45%)"} size={10} />
        </div>
      ) : (
        <div className="about_container">
          <div
            className="heading"
            style={{
              backgroundImage: `url(${img})`,
            }}
          >
            <div className="container">
              <h1>
                about <span>us</span>
              </h1>
            </div>
          </div>

          <div className="wrapper">
            <div className="container">
              <div className="txt">
                <h2>
                  welcome to
                  <h1 className="logo">
                    m
                    <span>
                      <OndemandVideoIcon className="icon" />
                    </span>
                    viehub
                  </h1>
                </h2>
                <p className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean non posuere mauris. Nulla elit quam, eleifend maximus
                  vehicula at, facilisis non diam. Nam in urna at est ultricies
                  euismod in et velit. Pellentesque sollicitudin purus vel neque
                  tristique, ac condimentum magna posuere. Quisque sed metus
                  risus. Nam tortor lacus, tincidunt non pretium nec, commodo
                  vitae nulla. Nullam nibh enim, blandit nec lectus quis,
                  sollicitudin semper tortor. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas. Nam neque elit, ornare vel lectus id, fringilla
                  tincidunt leo. Nunc sit amet eros sodales, dictum ante at,
                  vestibulum tortor. Curabitur lobortis dui ut tellus ultricies
                  ullamcorper. Quisque euismod ultricies sapien sed ullamcorper.
                  Curabitur erat nibh, tempor vitae elit ac, vulputate blandit
                  ante. Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Vestibulum gravida lectus
                  nibh, quis luctus elit fringilla mattis. Nullam feugiat felis
                  fringilla dolor varius, eget semper eros aliquet. Duis dapibus
                  ullamcorper enim in molestie. Phasellus luctus faucibus
                  dapibus. Suspendisse fermentum, urna quis consectetur cursus,
                  orci augue tempus neque, vitae pretium mauris arcu id leo.
                </p>

                <div className="box_con">
                  <div className="box">
                    <h3>10k</h3>
                    <span>listed movies</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>

                  <div className="box">
                    <h3>8k</h3>
                    <span>lovely users</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="img">
                <img src={api.imgw500(movie.poster_path)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
