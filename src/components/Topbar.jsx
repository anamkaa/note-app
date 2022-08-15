import React, { useState } from "react";
import { FadersHorizontal, Plus } from "phosphor-react";
import FilterPopup from "./FilterPopup";
import NoteModal from "./NoteModal";
import { useNotes } from "../context/notes-context";
import { useModal } from "../context/modal-context";

const Topbar = () => {
  const [filterPopup, setFilterPopup] = useState(false);
  const {noteModal,setNoteModal} = useModal();
  const {note} = useNotes();

  return (
    <>
      <div
        className="ff-container-options flex flex-align-center flex-justify-space-btw"
        id="category"
      >
        <div className="ff-container-content-category flex flex-align-center flex-wrap">
          <div className="ff-category-text btn ff-btn-primary text-black flex flex-align-center flex-justify-center"
          onClick={()=>setNoteModal(!noteModal)}
          >
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
          <FadersHorizontal
            size={24}
            className="text-black ff-icon-filter"
            weight="bold"
          />
        </div>

        {filterPopup && <FilterPopup />}
      </div>
      {noteModal && <NoteModal modalnote={note} />}
    </>
  );
};

export default Topbar;
