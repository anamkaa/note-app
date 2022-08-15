import axios from "axios";

export const addToArchiveService = async (
  noteId,
  note,
  token,
  notesDispatch
) => {
  try {
    const response = await axios.post(
      `/api/notes/archives/${noteId}`,
      { note },
      {
        headers: { authorization: token },
      }
    );
    notesDispatch({ type: "ADD_TO_ARCHIVE", payload: response.data.archives });
    notesDispatch({ type: "DELETE_FROM_NOTE", payload: response.data.notes });
  } catch (error) {
    console.log(error.message);
  }
};

export const restoreFromArchiveService = async (
  noteId,
  token,
  notesDispatch
) => {
  try {
    const response = await axios.post(
      `/api/archives/restore/${noteId}`,
      {},
      {
        headers: { authorization: token },
      }
    );
    notesDispatch({ type: "ADD_NOTE", payload: response.data.notes });
    notesDispatch({
      type: "RESTORE_FROM_ARCHIVE",
      payload: response.data.archives,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const trashFromArchiveService = async (noteId, token, notesDispatch) => {
  try {
    const response = await axios.post(`/api/archives/trash/${noteId}`, {},{
      headers: { authorization: token },
    });
    notesDispatch({
      type: "REMOVE_FROM_ARCHIVE",
      payload: response.data.archives,
    });
    notesDispatch({
        type:"MOVE_TO_TRASH",
        payload: response.data.trash
    })
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteFromArchiveService = async(noteId,token,notesDispatch) => {
  try{
const response = await axios.delete(`/api/archives/delete/${noteId}`,{
  headers: { authorization: token },
})
notesDispatch({
  type: "REMOVE_FROM_ARCHIVE",
  payload: response.data.archives,
});
  }catch(error){
    console.log(error.message);
  }
}
