import React from "react";
import { useFilter } from "../context/filter-context";

const FilterPopup = () => {
  const {
    filterState: { byPriority, byDate },
    filterDispatch,
  } = useFilter();

  return (
    <>
      <div className="ff-popup-sort text-black">
        <div className="ff-popup-chip flex flex-align-center flex-justify-end">
          <div
            className="text-small text-bold cursor"
            onClick={() => filterDispatch({ type: "CLEAR_FILTER" })}
          >
            CLEAR
          </div>
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
            onChange={() =>
              filterDispatch({ type: "SORT_BY_DATE", payload: "latest" })
            }
            checked={byDate === "latest" ? true : false}
          />
          Latest
        </div>

        <div className="ff-popup-chip flex flex-align-center flex-justify-start text-left">
          <input
            type="radio"
            name="sort-date"
            id=""
            className="ff-popup-text"
            onChange={() =>
              filterDispatch({ type: "SORT_BY_DATE", payload: "oldest" })
            }
            checked={byDate === "oldest" ? true : false}
          />
          Oldest
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
            onChange={() =>
              filterDispatch({ type: "FILTER_BY_PRIORITY", payload: "Low" })
            }
            checked={byPriority === "Low" ? true : false}
          />
          Low
        </div>

        <div className="ff-popup-chip flex flex-align-center flex-justify-start text-left">
          <input
            type="radio"
            name="filter-priority"
            id=""
            className="ff-popup-text"
            onChange={() =>
              filterDispatch({ type: "FILTER_BY_PRIORITY", payload: "Medium" })
            }
            checked={byPriority === "Medium" ? true : false}
          />
          Medium
        </div>

        <div className="ff-popup-chip flex flex-align-center flex-justify-start text-left">
          <input
            type="radio"
            name="filter-priority"
            id=""
            className="ff-popup-text"
            onClick={() =>
              filterDispatch({ type: "FILTER_BY_PRIORITY", payload: "High" })
            }
            checked={byPriority === "High" ? true : false}
          />
          High
        </div>
      </div>
    </>
  );
};

export default FilterPopup;
