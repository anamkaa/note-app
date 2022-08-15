import React, {useState } from "react";
import {
  TextHOne,
  TextHTwo,
  TextHThree,
  TextBolder,
  TextItalic,
  TextUnderline,
  TextStrikethrough,
  Paperclip,
  Palette,
  AlignBottom,
  Circle,
} from "phosphor-react";
import { useNotes } from "../context/notes-context";
import { useAuth } from "../context/auth-context";
// import { addNewNoteService, } from "../services/noteServices";
import { editNoteService } from "../services/noteServices";
import { useModal } from "../context/modal-context";
import { useEditModal } from "../context/editModal-context";

const EditNoteModal = ({}) => {
  const [modalColor, setModalColor] = useState(false);
  const [modalLevel, setModalLevel] = useState(false);
  const { noteObj, note, setNote, notesState, notesDispatch } = useNotes();
  const {
    user: { isLogged, tokenVal },
  } = useAuth();

  const {noteModal,setNoteModal} = useModal();
//   const [editNoteModal, setEditNoteModal] = useEditModal();

//   const addNewNoteHandler = () => {
//     if (isLogged) {
//       addNewNoteService(note, tokenVal, notesDispatch);
//     }
//     setNote(noteObj)
//   };

//   const editNoteHandler = () => {
//     if(isLogged){
//       editNoteService(modalnote._id,note,tokenVal,notesDispatch);
//     }
//     setNote({...note,isediting:false});
//   }

   const editNoteHandler = () => {
    if(isLogged){
      editNoteService(note._id,note,tokenVal,notesDispatch);
      setNote(noteObj)
      setNote({...note,isediting:false});
    }
    // setNote(noteObj)
  // setNote({...note,isediting:false});
  }

  const finalBgColor = note.bgColor;
  const enableBtn = note.title && note.body;

  return (
    <>
      <div className="nt-note-modal-wrap" style={{backgroundColor:finalBgColor}}>
        <div className="nt-note-modal-title text-left h4">
          <input
            type="text"
            name="note-title"
            id=""
            placeholder="Title"
            className="nt-input"
            onChange={(e) => {
              setNote({ ...note, title: e.target.value });
            }}
            value={note.title}
            style={{backgroundColor:finalBgColor}}
          />
        </div>
        <div className="nt-note-modal-editor flex flex-align-center flex-justify-space-around">
          <TextHOne size={18} />
          <TextHTwo size={18} />
          <TextHThree size={18} />
          <TextBolder size={18} />
          <TextItalic size={18} />
          <TextUnderline size={18} />
          <TextStrikethrough size={18} />
          <Paperclip size={18} />
        </div>
        <div className="nt-note-modal-content text-left h5">
          <input
            type="text"
            name="note-desc"
            id=""
            placeholder="Body"
            className="nt-input"
            onChange={(e) => {
              setNote({ ...note, body: e.target.value });
            }}
            value={note.body}
            style={{backgroundColor:finalBgColor}}
          />
        </div>
        <hr />
        <div className="nt-note-modal-label text-left h6">
          <input
            type="text"
            name=""
            id=""
            placeholder="Add a label"
            className="nt-input"
            onChange={(e) => {
              setNote({ ...note, label: e.target.value });
            }}
            value={note.label}
            style={{backgroundColor:finalBgColor}}
          />
        </div>
        <div className="nt-note-modal-foot flex flex-align-center flex-justify-space-btw">
          <div className="nt-note-modal-foot-icon flex flex-align-center flex-justify-space-btw">
            <Palette
              size={28}
              className="nt-icon"
              onClick={() =>
                setModalColor((modalColor) => (!modalColor ? true : false))
              }
            />
            <AlignBottom
              size={28}
              className="nt-icon"
              onClick={() =>
                setModalLevel((modalLevel) => (!modalLevel ? true : false))
              }
            />
          </div>
          <div className="nt-note-modal-foot-btn flex flex-align-center flex-justify-space-btw">
            <button className="nt-btn btn-ghost nt-input h6" style={{backgroundColor:finalBgColor}}
            onClick={() => 
              {
               setNoteModal(false);
              }}
            >CANCEL</button>

            <button
              className="nt-btn nt-input h6 text-bold"
              onClick={() => 
                {
                    editNoteHandler();
                 setNoteModal(false);
                }

            //   {
            //     if(note.isediting){
            //       editNoteHandler();
            //     }
            //     else{
            //       addNewNoteHandler()
            //       setNoteModal(false);
            //     }
            //   }
               }
               style={{backgroundColor:finalBgColor}}
               disabled={!enableBtn}
            >
             Update

           
             
            </button>
          </div>
        </div>
      </div>
      {modalColor && (
        <div className="nt-note-modal-color nt-note-modal-wrap flex flex-align-center flex-justify-start">
          <Circle
            size={32}
            weight="fill"
            style={{ color: "#D9F8C4" }}
            className="nt-icon"
            onClick={()=>setNote({...note,bgColor:"#D9F8C4"})}
          />
          <Circle
            size={32}
            weight="fill"
            style={{ color: "#B2C8DF" }}
            className="nt-icon"
            onClick={()=>setNote({...note,bgColor:"#B2C8DF"})}
          />
          <Circle
            size={32}
            weight="fill"
            style={{ color: "#D3CEDF" }}
            className="nt-icon"
            onClick={()=>setNote({...note,bgColor:"#D3CEDF"})}
          />
          <Circle
            size={32}
            weight="fill"
            style={{ color: "#F2D7D9" }}
            className="nt-icon"
            onClick={()=>setNote({...note,bgColor:"#F2D7D9"})}
          />
        </div>
      )}

      {modalLevel && (
        <div className="nt-note-modal-color nt-note-modal-wrap flex flex-align-center flex-justify-evenly">
          <div className="flex flex-align-center flex-justify-start text-left nt-input">
            <input type="radio" name="note-priority" id="" className="" onClick={()=>setNote({...note,priority:"Low"})} />
            Low
          </div>
          <div className="flex flex-align-center flex-justify-start text-left nt-input">
            <input type="radio" name="note-priority" id="" className="" onClick={()=>setNote({...note,priority:"Medium"})} />
            Medium
          </div>
          <div className="flex flex-align-center flex-justify-start text-left nt-input">
            <input type="radio" name="note-priority" id="" className="" onClick={()=>setNote({...note,priority:"High"})} />
            High
          </div>
        </div>
      )}
    </>
  );
};

export default EditNoteModal;
