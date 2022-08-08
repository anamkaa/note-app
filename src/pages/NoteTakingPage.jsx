import React from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import Topbar from "../components/Topbar";
import { ArrowCircleUp } from "phosphor-react";

export const NoteTakingPage = () => {
  return (
    <>
      <Navbar />
      <ArrowCircleUp
        size={36}
        weight="fill"
        className="ff-arrowup text-black"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      />

      <div className="ff-container">
        <Aside />

        <div className="ff-container-content">
          <Topbar />

          <div className="ff-container-video-card">Notes will appear here</div>
        </div>
      </div>
    </>
  );
};


