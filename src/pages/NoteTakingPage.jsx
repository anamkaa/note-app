import React,{useEffect} from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import Topbar from "../components/Topbar";
import { ArrowCircleUp } from "phosphor-react";
import { useAuth } from "../context/auth-context";
import {axios} from "axios";
import { useNotes } from "../context/notes-context";
import NoteCard from "../components/NoteCard";
import { filterBySearch } from "../utility/filterBySearchUtil";
import { useFilter } from "../context/filter-context";
import { filterByPriority } from "../utility/filterByPriorityUtil";
import { sortByDate } from "../utility/sortByDate";
// import NoteModal from "../components/NoteModal";

export const NoteTakingPage = () => {

  const {filterState:{bySearch,byPriority,byDate}} = useFilter();
  const {user:{tokenVal}} = useAuth();
  const {notesState:{notes}} = useNotes();
  // console.log(bySearch,byPriority);

const filteredBySearch = filterBySearch(notes,bySearch);
const filteredByPriority = filterByPriority(filteredBySearch,byPriority);
// const sortedByDate = sortByDate(filteredBySearch,byDate);

// const filteredBySearch = [...notes].filter((item)=>{

// })



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

          <div className="ff-container-video-card">
          {filteredByPriority.length ?  filteredByPriority.map((item)=> <NoteCard note={item} key={item._id} /> ) : "No notes added"}
        
          </div>
        </div>
      </div>
    </>
  );
};


