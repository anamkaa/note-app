import { Route, Routes } from "react-router-dom";
import "./App.css";
// import ArchivePage from "./pages/ArchivePage";
// import HomePage from "./pages/HomePage";
// import LabelPage from "./pages/LabelPage";
// import LoginPage from "./pages/LoginPage";
// import NoteTakingPage from "./pages/NoteTakingPage";
// import SignupPage from "./pages/SignupPage";
// import TrashPage from "./pages/TrashPage";
import {ArchivePage,HomePage,LoginPage,LabelPage,NoteTakingPage,SignupPage,TrashPage} from "./pages"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/noteTaking" element={<NoteTakingPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/label" element={<LabelPage />} />
        <Route path="/trash" element={<TrashPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
