import { v4 as uuid } from "uuid";
const { createContext, useContext, useState, useReducer } = require("react");

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const notesReducer = (state, action) => {
    switch (action.type) {
      case "ADD_NOTE":
        return { ...state, notes: action.payload };

      case "EDIT_NOTE":
        return {...state , notes: action.payload}  

      case "DELETE_FROM_NOTE":
        return {...state, notes: action.payload};

      case "MOVE_TO_TRASH":
        return { ...state, trash: action.payload };

      case "RESTORE_FROM_TRASH":
        return { ...state, trash: action.payload };

      case "REMOVE_FROM_TRASH":
        return { ...state, trash: action.payload };

      case "ADD_TO_ARCHIVE":
        return { ...state, archives: action.payload };

      case "RESTORE_FROM_ARCHIVE":
        return { ...state, archives: action.payload };

      case "REMOVE_FROM_ARCHIVE":
        return { ...state, archives: action.payload };

        default:
            return state;
    }
  };

  const noteObj = {
    _id: uuid(),
    title: "",
    body: "",
    label: "",
    priority: "",
    bgColor: "",
    isediting: false,
    date: new Date().toLocaleString(),
  };

  const [note, setNote] = useState(noteObj);
  const [notesState, notesDispatch] = useReducer(notesReducer, {
    notes: [],
    trash: [],
    archives: [],
  });

  return (
    <NotesContext.Provider
      value={{ noteObj, note, setNote, notesState, notesDispatch }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
