import { useState } from "react";
import "./signup.scss";
import LoginIcon from "@mui/icons-material/Login";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

export const SignUp = () => {
  const [sign_up, setSign_up] = useState(false);

  const changestate = () => {
    setSign_up(sign_up ? false : true);
  };

  return (
    <div className="form">
      <div className="wrapper container">
        <form className="form">
          <h1 className="logo">
            m
            <span>
              <OndemandVideoIcon className="icon" />
            </span>
            viehub
          </h1>
          <div className={sign_up ? "input " : "input active"}>
            <label>name</label>
            <input type="name" required />
          </div>

          <div className="input">
            <label>email</label>
            <input type="email" required />
          </div>

          <div className="input">
            <label>password</label>
            <input type="password" required />
          </div>
          <div className={sign_up ? "btn active" : "btn"}>
            <button>
              <LoginIcon className="icon" />
              sign in
            </button>
            <button>
              <LoginIcon className="icon" />
              sign up
            </button>
          </div>

          <div className={sign_up ? "query active" : "query"}>
            <p>
              Don't have an account? <span onClick={changestate}>sign up</span>
            </p>
            <p>
              Already have an account?
              <span onClick={changestate}>sign in</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
