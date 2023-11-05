import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StarIcon from "@mui/icons-material/Star";
import ReviewsIcon from "@mui/icons-material/Reviews";

import { api } from "../api";

export const Reviews = (props) => {
  const activate = (event) => {
    event.currentTarget.classList.toggle("active");
  };
  return (
    <>
      <h2>
        <ReviewsIcon className="icon" /> reviews
      </h2>
      <div className="main_wrapper">
        <div className="form">
          <h3>{`review "${props.heading}"`}</h3>
          <p>
            Write a review on this movie. It will be posted on this page. Don't
            forget to make it short and sweet.
          </p>

          <div className="input_box">
            <label>name</label>
            <input type="text" />
          </div>

          <div className="input_box">
            <label>
              select rating <StarIcon className="icon" />
            </label>
            <select name="stars">
              <option value="0-star">0-star</option>
              <option value="1-star">1-star</option>
              <option value="2-stars">2-stars</option>
              <option value="3-stars">3-stars</option>
              <option value="4-stars">4-stars</option>
              <option value="5-stars">5-stars</option>
            </select>
          </div>

          <div className="input_box">
            <label>message</label>
            <textarea placeholder="make it short and sweet"></textarea>
          </div>

          <button>submit</button>
        </div>
        <div className="reviews">
          <h3>reviews</h3>
          <div className="wrapper">
            {props.detail.length === 0 && (
              <h1 className="no_review">no review for this movie</h1>
            )}
            {props.detail.length !== 0 &&
              props.detail.map((i, key) => {
                return (
                  <div key={key} className="box" onClick={activate}>
                    <div className="img">
                      {i.author_details.avatar_path === null ? (
                        <span>
                          <PersonIcon className="icon" />
                        </span>
                      ) : (
                        <img src={api.imgw500(i.author_details.avatar_path)} />
                      )}
                    </div>

                    <div className="txt">
                      <div>
                        <h4>
                          {i.author_details.name === ""
                            ? i.author_details.username
                            : i.author_details.name}
                        </h4>
                        <p>
                          {i.content}{" "}
                          <span>
                            more <KeyboardArrowDownIcon className="icon" />
                          </span>
                        </p>
                      </div>
                      <div>
                        {i.author_details.rating}
                        <StarIcon className="icon" />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
