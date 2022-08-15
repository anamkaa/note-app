import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
import { NotesProvider } from "./context/notes-context";
import { FilterProvider } from "./context/filter-context";
import { ModalProvider } from "./context/modal-context";
import { EditModalProvider } from "./context/editModal-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NotesProvider>
          <FilterProvider>
            <ModalProvider>
              <EditModalProvider>
                <App />
              </EditModalProvider>
            </ModalProvider>
          </FilterProvider>
        </NotesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
