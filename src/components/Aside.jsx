import React from "react";
import { Archive, Tag, Trash, NotePencil } from "phosphor-react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <>
      <div className="ff-container-aside-wrap">
        <div className="ff-container-aside">
          <Link to="/noteTaking">
            <div className="ff-container-aside-chip flex flex-align-center flex-justify-start cursor">
              <NotePencil size={30} className="ff-aside-chip-icon" />

              <div className="ff-aside-chip-text text-black">Note</div>
            </div>
          </Link>

          <Link to="/archive">
            <div className="ff-container-aside-chip flex flex-align-center flex-justify-start cursor">
              <Archive size={30} className="ff-aside-chip-icon" />

              <div className="ff-aside-chip-text text-black">Archive</div>
            </div>
          </Link>

          <Link to="/label">
            <div className="ff-container-aside-chip flex flex-align-center flex-justify-start cursor">
              <Tag size={30} className="ff-aside-chip-icon" />
              <div className="ff-aside-chip-text text-black">Labels</div>
            </div>
          </Link>

          <Link to="/trash">
            <div className="ff-container-aside-chip flex flex-align-center flex-justify-start cursor">
              <Trash size={30} className="ff-aside-chip-icon" />
              <div className="ff-aside-chip-text text-black">Trash</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Aside;
