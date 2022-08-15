import axios from "axios";

export const addNewNoteService = async (note, token, notesDispatch) => {
  try {
    const response = await axios.post(
      "/api/notes",
      { note },
      { headers: { authorization: token } }
    );

    notesDispatch({ type: "ADD_NOTE", payload: response.data.notes });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteNoteService = async (noteId, note,token, notesDispatch) => {
  try {
    const response = await axios.delete(`/api/notes/${noteId}`, {
      headers: { authorization: token },
    });
    notesDispatch({ type: "DELETE_FROM_NOTE", payload: response.data.notes });
    notesDispatch({ type: "MOVE_TO_TRASH", payload: note });

  } catch (error) {
    console.log(error.message);
  }
};

export const editNoteService = async(noteId,note,token,notesDispatch) => {
  try {
    const response = await axios.post(`/api/notes/${noteId}`, {note},{
      headers: { authorization: token },
    });
    notesDispatch({ type: "EDIT_NOTE", payload: response.data.notes });
  } catch (error) {
    console.log(error.message);
  }
}
