import React, { useState } from "react";
import { FadersHorizontal, Plus } from "phosphor-react";
import FilterPopup from "./FilterPopup";

const Topbar = () => {
  const [filterPopup, setFilterPopup] = useState(false);

  return (
    <>
      <div
        className="ff-container-options flex flex-align-center flex-justify-space-btw"
        id="category"
      >
        <div className="ff-container-content-category flex flex-align-center flex-wrap">
          <div className="ff-category-text btn ff-btn-primary text-black flex flex-align-center flex-justify-center">
            <Plus size={14} className="ff-aside-chip-icon" weight="bold" />
            Add Note
          </div>
        </div>

        <div
          onClick={() =>
            setFilterPopup((filterPopup) => (!filterPopup ? true : false))
          }
          className="flex flex-align-center cursor flex-justify-center"
        >
          <div className="text-black h6">Filter</div>

          <FadersHorizontal
            size={18}
            className="text-black ff-icon-filter"
            weight="bold"
          />
        </div>

        {filterPopup && <FilterPopup />}
      </div>
    </>
  );
};

export default Topbar;
