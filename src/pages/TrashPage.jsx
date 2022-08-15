import React from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import { ArrowCircleUp } from "phosphor-react";
import { useNotes } from "../context/notes-context";
import NoteCard from "../components/NoteCard";
import DeletedNoteCard from "../components/DeletedNoteCard";

export const TrashPage = () => {

  const {notesState:{trash}} = useNotes();

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
            {
              trash.length ? trash.map((item)=><DeletedNoteCard note={item} />) : "No notes in the trash"
            }
          </div>
        </div>
      </div>
    </>
  );
};

