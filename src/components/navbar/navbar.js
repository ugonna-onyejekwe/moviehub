import "./navbar.scss";

import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { NavLink, useNavigate } from "react-router-dom";
import { useState, React } from "react";

export const Nav_bar = () => {
  const [input, setInput] = useState("");
  const [ismenu, setIsmenu] = useState(false);
  const [searching, setSearching] = useState(false);

  let navigate = useNavigate();

  const handlekey = (e) => {
    if (e.key === "Enter") {
      console.log("yes");
      navigate("/search", { state: { key: `${input}` } });
      window.location.reload(false);
    }
  };

  const set_search = () => {
    setSearching(searching ? false : true);
  };

  const activate_menu = () => {
    setIsmenu(ismenu ? false : true);
  };

  return (
    <>
      <nav>
        <div className={ismenu ? "backdrop active" : "backdrop"}></div>

        <div className="nav_wrapper container">
          <div
            className={searching ? "nav_container searching" : "nav_container"}
          >
            <h1 className="logo">
              m
              <span>
                <OndemandVideoIcon className="icon" />
              </span>
              viehub
            </h1>

            <div className="search_con ">
              <button className="search" onClick={set_search}>
                <SearchIcon className="icon" />
              </button>
              <button className="close" onClick={set_search}>
                <CloseIcon className="icon " />
              </button>
              <input
                type="text"
                placeholder="search movies by name"
                onChange={({ target: { value } }) => {
                  setInput(value);
                }}
                onKeyDown={handlekey}
                value={input}
              />
            </div>

            <div className={ismenu ? "links active" : "links"}>
              <p className="close_icon" onClick={activate_menu}>
                <CloseIcon className="icon" />
              </p>

              <NavLink
                exact
                activeClassName="active"
                to="/"
                onClick={activate_menu}
              >
                home
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/movies"
                onClick={activate_menu}
              >
                movies
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/about"
                onClick={activate_menu}
              >
                about us
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/contact"
                onClick={activate_menu}
              >
                contact us
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/signup"
                onClick={activate_menu}
              >
                <button>sign in</button>
              </NavLink>
            </div>
          </div>
          <div className="menu_btn" onClick={activate_menu}>
            <MenuIcon className="icon" />
          </div>
        </div>
      </nav>
    </>
  );
};
