const { createContext, useContext,useState } = require("react");

const EditModalContext = createContext();

export const EditModalProvider = ({children}) => {

    const [editNoteModal, setEditNoteModal] = useState(false);

    return (
        <EditModalContext.Provider value={{editNoteModal, setEditNoteModal}}>
            {children}
        </EditModalContext.Provider>
    )
}

export const useEditModal = () => useContext(EditModalContext);