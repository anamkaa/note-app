import { Route, Routes } from "react-router-dom";
import "./App.css";
import {RequireAuth} from "./components/RequireAuth";
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
        <Route path="/noteTaking" element={
          <RequireAuth>
        <NoteTakingPage />
        </RequireAuth>} />
        <Route path="/archive" element={
         <RequireAuth><ArchivePage /></RequireAuth>} />
        <Route path="/label" element={<RequireAuth><LabelPage /></RequireAuth>} />
        <Route path="/trash" element={<RequireAuth><TrashPage /></RequireAuth>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
