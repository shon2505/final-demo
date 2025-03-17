import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <>
      <div id="app-download" className="app-download">
        <p>
          For Better Experience Download <br />
          EatZee App
        </p>
        <div className="app-download-platforms">
          <img src={assets.play_store} alt="" />
          <img src={assets.app_store} alt="" />
        </div>
      </div>
    </>
  );
};

export default AppDownload;
