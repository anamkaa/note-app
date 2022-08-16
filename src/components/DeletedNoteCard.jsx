import React, { useState } from "react";
import { PencilSimpleLine, Archive, Trash, UploadSimple ,Recycle} from "phosphor-react";
import NoteModal from "./NoteModal";
import { deleteNoteService } from "../services/noteServices";
import { useAuth } from "../context/auth-context";
import { useNotes } from "../context/notes-context";
import {
  addToArchiveService,
  deleteFromArchiveService,
  restoreFromArchiveService,
} from "../services/archiveServices";
import { deleteFromTrashService, restoreFromTrashService } from "../services/trashService";

const DeletedNoteCard = ({ note }) => {
  const [editNote, setEditNote] = useState(false);
  const { noteObj, setNote, notesState, notesDispatch } = useNotes();
  const {
    user: { isLogged, tokenVal },
  } = useAuth();

  const isArchive = notesState.archives.some((item) => {
    if (item._id === note._id) {
      return true;
    }

    return false;
  });


  const deleteFromTrash = () => {
    if (isLogged) {
      deleteFromTrashService(note._id, tokenVal, notesDispatch);
    }
  };

  const restoreFromTrash = () => {
    if(isLogged){
        restoreFromTrashService(note._id,note,tokenVal,notesDispatch);
    }
  }

  //   const addToArchive = () => {
  //     if (isLogged) {
  //       addToArchiveService(note._id, note, tokenVal, notesDispatch);
  //     }
  //   };

  //   const restoreFromArchive = () => {
  //     if (isLogged) {
  //       restoreFromArchiveService(note._id, tokenVal, notesDispatch);
  //     }
  //   };

  //   const deleteFromArchive = () => {
  //     if(isLogged) {
  //         deleteFromArchiveService(note._id,tokenVal,notesDispatch);
  //     }
  //   }

  const finalBgColor = note.bgColor;


  return (
    <>
      <div className="nt-note-modal-wrap" style={{backgroundColor:finalBgColor}}>
        <div className="flex flex-align-center flex-justify-space-btw">
          <div className="nt-note-modal-title text-left h4 nt-input" style={{backgroundColor:finalBgColor}}>
            {note.title}
          </div>

          {
  note.priority && <div className="nt-note-modal-label text-left text-small nt-badge" style={{backgroundColor:finalBgColor}}>
  {note.priority}
</div>
}
        </div>
        {/* <div className="nt-note-modal-editor flex flex-align-center flex-justify-space-around">
        <TextHOne size={18} />
        <TextHTwo size={18} />
        <TextHThree size={18} />
        <TextBolder size={18} />
        <TextItalic size={18} />
        <TextUnderline size={18} />
        <TextStrikethrough size={18} />
        <Paperclip size={18} />
        </div> */}
        <div className="nt-note-modal-content text-left h5 nt-input" style={{backgroundColor:finalBgColor}}>
          {/* <input type="text" name="note-desc" id="" placeholder='Body' className='nt-input' /> */}
          {note.body}
        </div>
        {/* <hr /> */}
        {
          note.label &&  <div className="nt-note-modal-label text-left text-small badge-solid " style={{backgroundColor:finalBgColor}}>
          {note.label}
        </div>
        }
        <div className="nt-note-modal-foot flex flex-align-center flex-justify-space-btw">
          <div className="nt-note-modal-foot-icon flex flex-align-center flex-justify-space-btw">
            {/* <Palette size={28} className="nt-icon" />
    <AlignBottom size={28} className="nt-icon" /> */}
            {/* <PencilSimpleLine
              size={28}
              className="nt-icon"
              onClick={() =>
                setEditNote((editNote) => (!editNote ? true : false))
              }
            /> */}
            {/* {isArchive ? (
              <UploadSimple
                size={28}
                className="nt-icon"
                onClick={() => restoreFromArchive()}
              />
            ) : (
              <Archive
                size={28}
                className="nt-icon"
                onClick={() => addToArchive()}
              />
            )} */}
            <Trash
              size={28}
              className="nt-icon"
              onClick={() => {
                deleteFromTrash();
              }}
            />
            <Recycle  size={28}
              className="nt-icon"
              onClick={() => {
                restoreFromTrash();
              }} />
          </div>
          <div className="nt-note-modal-foot-btn flex flex-align-center flex-justify-space-btw" >
            <div className="nt-btn btn-ghost nt-input h6" style={{backgroundColor:finalBgColor}}>{note.date}</div>
            {/* <div className="nt-btn btn-ghost nt-input h6">Time</div> */}
          </div>
        </div>
      </div>
      {editNote && <NoteModal />}
    </>
  );
};

export default DeletedNoteCard;
