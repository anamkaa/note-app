import React from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import { ArrowCircleUp } from "phosphor-react";
import { useNotes } from "../context/notes-context";
import NoteCard from "../components/NoteCard";

export const ArchivePage = () => {

  const {notesState:{archives}} = useNotes();

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
            archives.length ? archives.map((item)=><NoteCard note={item}/>) : "Nothing in archive"
           }
          </div>
        </div>
      </div>
    </>
  );
};

