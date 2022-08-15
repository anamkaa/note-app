import axios from "axios";

// export const moveToTrashService = async (noteId, token, notesDispatch) => {
//   try {
//     const response = await axios.delete(
//       `/api/notes/trash/${noteId}`,
//       {},
//       {
//         headers: { authorization: token },
//       }
//     );

//     notesDispatch({ type: "MOVE_TO_TRASH", payload: response.data.trash });
//     notesDispatch({ type: "DELETE_FROM_NOTE", payload: response.data.notes });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const moveToTrashService = async (noteId,note, token, notesDispatch) => {
  try {
    const response = await axios.post(
      `/api/notes/trash/${noteId}`,
      {note},
      {
        headers: { authorization: token },
      }
    );

    notesDispatch({ type: "MOVE_TO_TRASH", payload: response.data.trash });
    notesDispatch({ type: "DELETE_FROM_NOTE", payload: response.data.notes });
    console.log(response.data.trash);
    console.log(response.data.notes);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteFromTrashService = async (noteId, token, notesDispatch) => {
  try {
    const response = await axios.delete(`/api/trash/delete/${noteId}`, {
      headers: { authorization: token },
    });
    notesDispatch({ type: "REMOVE_FROM_TRASH", payload: response.data.trash });
  } catch (error) {
    console.log(error.message);
  }
};

export const restoreFromTrashService = async (noteId,note,token, notesDispatch) => {
  try {
    const response = await axios.post(
      `/api/trash/restore/${noteId}`,
      {note},
      {
        headers: { authorization: token },
      }
    );
    notesDispatch({ type: "REMOVE_FROM_TRASH", payload: response.data.trash });
    notesDispatch({ type: "ADD_NOTE", payload: response.data.notes});

    console.log(response.data.notes);
    console.log(response.data.trash);
  } catch (error) {
    console.log(error.message);
  }
};
