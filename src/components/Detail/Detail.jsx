import React from "react";
import "./Detail.css";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import DownloadingRoundedIcon from "@mui/icons-material/DownloadingRounded";
const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum doe</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <KeyboardArrowUpRoundedIcon />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <KeyboardArrowUpRoundedIcon />
          </div>
        </div>
        <div className="option photoes">
          <div className="title">
            <span>Shared photos</span>
            <KeyboardArrowDownRoundedIcon />
          </div>
          <div className="photo">
            <div className="photoitem">
              <div className="photodetail">
                <img src="download.jpg" alt="" />
                <span>Photo33344211</span>
              </div>
              <DownloadingRoundedIcon className="downloadicon" />
            </div>
            <div className="photoitem">
              <div className="photodetail">
                <img src="download.jpg" alt="" />
                <span>Photo33344211</span>
              </div>
              <DownloadingRoundedIcon className="downloadicon" />
            </div>
            <div className="photoitem">
              <div className="photodetail">
                <img src="download.jpg" alt="" />
                <span>Photo33344211</span>
              </div>
              <DownloadingRoundedIcon className="downloadicon" />
            </div>
            <div className="photoitem">
              <div className="photodetail">
                <img src="download.jpg" alt="" />
                <span>Photo33344211</span>
              </div>
              <DownloadingRoundedIcon className="downloadicon"  />
            </div>
            <div className="photoitem">
              <div className="photodetail">
                <img src="download.jpg" alt="" />
                <span>Photo33344211</span>
              </div>
              <DownloadingRoundedIcon className="downloadicon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <KeyboardArrowUpRoundedIcon />
          </div>
        </div>
      </div>
      <button>Block User</button>
      <button className="logout">Logout</button>
    </div>
  );
};

export default Detail;
