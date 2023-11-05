import "./footer.scss";

import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="box">
          <h3>company</h3>
          <p>home</p>
          <p>movies</p>
          <p>about us</p>
          <p>contact us</p>
          <p>sign up</p>
        </div>
        <div className="box">
          <h3>top categories</h3>
          <p>action</p>
          <p>fatansy</p>
          <p>horror</p>
          <p>comedy</p>
          <p>adventure</p>
        </div>
        <div className="box">
          <h3>my account</h3>
          <p>dashboard</p>
          <p>my favourites</p>
          <p>profile</p>
          <p>change password</p>
        </div>
        <div className="box">
          <h1 className="logo">
            m
            <span>
              <OndemandVideoIcon className="icon" />
            </span>
            viehub
          </h1>
          <p>lorem is a dumy text</p>
          <p>new york city</p>
          <p>tel: +234 8101 3308 24</p>
          <p>email: moviehub@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};
