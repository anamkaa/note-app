import React from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import { ArrowCircleUp } from "phosphor-react";

const TrashPage = () => {
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
          <div className="ff-container-video-card">
            Deleted notes will appear here
          </div>
        </div>
      </div>
    </>
  );
};

export default TrashPage;
