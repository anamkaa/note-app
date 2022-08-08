import React from "react";

const FilterPopup = () => {
  return (
    <>
      <div className="ff-popup-sort text-black">
        <div className="ff-popup-chip flex flex-align-center flex-justify-end">
          <div className="text-small text-bold cursor">CLEAR</div>
        </div>

        <div className="ff-popup-chip flex flex-align-center flex-justify-start text-left text-bold">
          Sort By
        </div>

        <hr />

        <div className="ff-popup-chip flex flex-align-center flex-justify-start text-left h5">
          Date
        </div>

        <div className="ff-popup-chip flex flex-align-center flex-justify-start text-left">
          <input
            type="radio"
            name="sort-date"
            id=""
            className="ff-popup-text"
          />
          Latest
        </div>

        <div className="ff-popup-chip flex flex-align-center flex-justify-start text-left">
          <input
            type="radio"
            name="sort-date"
            id=""
            className="ff-popup-text"
          />
          Oldest
        </div>

        <div className="ff-popup-chip flex flex-align-center flex-justify-start text-left h5">
          Priority
        </div>

        <div className="ff-popup-chip flex flex-align-center flex-justify-start text-left">
          <input
            type="radio"
            name="sort-priority"
            id=""
            className="ff-popup-text"
          />
          Low to High
        </div>

        <div className="ff-popup-chip flex flex-align-center flex-justify-start text-left">
          <input
            type="radio"
            name="sort-priority"
            id=""
            className="ff-popup-text"
          />
          High to Low
        </div>

        <div className="ff-popup-chip flex flex-align-center flex-justify-start text-left text-bold">
          Filter By
        </div>

        <hr />

        <div className="ff-popup-chip flex flex-align-center flex-justify-start text-left h5">
          Priority
        </div>

        <div className="ff-popup-chip flex flex-align-center flex-justify-start text-left">
          <input
            type="radio"
            name="filter-priority"
            id=""
            className="ff-popup-text"
          />
          Low
        </div>

        <div className="ff-popup-chip flex flex-align-center flex-justify-start text-left">
          <input
            type="radio"
            name="filter-priority"
            id=""
            className="ff-popup-text"
          />
          Medium
        </div>

        <div className="ff-popup-chip flex flex-align-center flex-justify-start text-left">
          <input
            type="radio"
            name="filter-priority"
            id=""
            className="ff-popup-text"
          />
          High
        </div>
      </div>
    </>
  );
};

export default FilterPopup;
