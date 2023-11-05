import img1 from "../../src/img/app1.png";
import img2 from "../../src/img/app2.png";

import TvIcon from "@mui/icons-material/Tv";
import VideocamIcon from "@mui/icons-material/Videocam";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";

export const Our_app = () => {
  return (
    <>
      <div className="img">
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
      </div>
      <div className="txt">
        <div>
          <h2>download your show watch offline</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non
            posuere mauris. Nulla elit quam, eleifend maximus vehicula at,
            facilisis non diam. Nam in urna at est ultricies euismod in et
            velit.
          </p>

          <div className="box_con">
            <div className="box">
              <div className="icon_con">
                <TvIcon className="icon" />
              </div>
              <div>
                <h3>enjoy on your tv</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean non posuere mauris
                </p>
              </div>
            </div>

            <div className="box">
              <div className="icon_con">
                <VideocamIcon className="icon" />
              </div>

              <div>
                <h3>watch everywhere</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean non posuere mauris
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="btn">
          <button>
            download app <SystemUpdateAltIcon className="icon" />
          </button>
        </div>
      </div>
    </>
  );
};
