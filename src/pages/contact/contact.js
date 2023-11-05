import "./contact.scss";

import img from "../../img/bg1.jpg";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const Contact = () => {
  return (
    <>
      <div className="contact_container">
        <div
          className="heading"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          <h1>
            contact <span>us</span>
          </h1>
        </div>

        <div className="wrapper container">
          <div className="box">
            <span>
              <EmailIcon className="icon" />
            </span>
            <h3>email us</h3>
            <p>
              <a href="#">moviehub@gmail.com</a> Lorem ipsum dolor sit amet,
              consectetur adipiscing e lit.
            </p>
          </div>
          <div className="box">
            <span>
              <CallIcon className="icon" />
            </span>
            <h3>call us</h3>
            <p>
              <a href="#">+234 8101 3308 34</a> Lorem ipsum dolor sit amet,
              consectetur adipiscing e lit.
            </p>
          </div>
          <div className="box">
            <span>
              <LocationOnIcon className="icon" />
            </span>
            <h3>location</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing e lit.</p>
          </div>
        </div>
      </div>
    </>
  );
};
