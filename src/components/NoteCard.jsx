import React, { useEffect, useState } from "react";
import { PencilSimpleLine, Archive, Trash, UploadSimple } from "phosphor-react";
import NoteModal from "./NoteModal";
import { deleteNoteService, editNoteService } from "../services/noteServices";
import { useAuth } from "../context/auth-context";
import { useNotes } from "../context/notes-context";
import {
  addToArchiveService,
  trashFromArchiveService,
  restoreFromArchiveService,
  deleteFromArchiveService,
} from "../services/archiveServices";
import { moveToTrashService } from "../services/trashService";
import { useModal } from "../context/modal-context";
import { useEditModal } from "../context/editModal-context";
import EditNoteModal from "./EditNoteModal";

const NoteCard = ({ note }) => {
  const { noteObj, setNote, notesState, notesDispatch } = useNotes();
  const {
    note: { isediting },
  } = useNotes();
  const {
    user: { isLogged, tokenVal },
  } = useAuth();

  const [editNoteModal, setEditNoteModal] = useState(false);

  const isArchive = notesState.archives.some((item) => {
    if (item._id === note._id) {
      return true;
    }

    return false;
  });

  const deleteNoteHandler = () => {
    if (isLogged) {
      deleteNoteService(note._id, note, tokenVal, notesDispatch);
    }
  };

  const addToArchive = () => {
    if (isLogged) {
      addToArchiveService(note._id, note, tokenVal, notesDispatch);
    }
  };

  const restoreFromArchive = () => {
    if (isLogged) {
      restoreFromArchiveService(note._id, tokenVal, notesDispatch);
    }
  };

  const deleteFromArchive = () => {
    if (isLogged) {
      deleteFromArchiveService(note._id, tokenVal, notesDispatch);
    }
  };

  const moveToTrash = () => {
    if (isLogged) {
      moveToTrashService(note._id, note, tokenVal, notesDispatch);
    }
  };

  const finalBgColor = note.bgColor;

  return (
    <>
      <div
        className="nt-note-modal-wrap"
        style={{ backgroundColor: finalBgColor }}
      >
        <div className="flex flex-align-center flex-justify-space-btw">
          <div
            className="nt-note-modal-title text-left h4 nt-input"
            style={{ backgroundColor: finalBgColor }}
          >
            {note.title}
          </div>

          {note.priority && (
            <div className="nt-note-modal-label text-left text-small nt-badge">
              {note.priority}
            </div>
          )}
        </div>

        <div
          className="nt-note-modal-content text-left h5 nt-input"
          style={{ backgroundColor: finalBgColor }}
        >
          {note.body}
        </div>

        {note.label && (
          <div className="nt-note-modal-label text-left text-small badge-solid ">
            {note.label}
          </div>
        )}

        <div className="nt-note-modal-foot flex flex-align-center flex-justify-space-btw">
          <div className="nt-note-modal-foot-icon flex flex-align-center flex-justify-space-btw">
            <PencilSimpleLine
              size={28}
              className="nt-icon"
              onClick={() => {
                setEditNoteModal(!editNoteModal);
                setNote({ ...note, isediting: true });
              }}
            />
            {isArchive ? (
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
            )}
            <Trash
              size={28}
              className="nt-icon"
              onClick={() => {
                isArchive ? deleteFromArchive() : moveToTrash();
              }}
            />
          </div>
          <div className="nt-note-modal-foot-btn flex flex-align-center flex-justify-space-btw">
            <div
              className="nt-btn btn-ghost nt-input h6"
              style={{ backgroundColor: finalBgColor }}
            >
              {note.date}
            </div>
          </div>
        </div>
      </div>
      {editNoteModal && (
        <div className="backdrop-editmodal">
          <div className="nt-wrap">
            <NoteModal setEditNoteModal={setEditNoteModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default NoteCard;
