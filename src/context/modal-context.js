import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({children}) => {

    const [noteModal,setNoteModal] = useState(false);
    const [editNote, setEditNote] = useState(false);

    return (
        <ModalContext.Provider value={{noteModal,setNoteModal,editNote, setEditNote}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext);