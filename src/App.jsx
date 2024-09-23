import "./App.css";
import { Route, Routes } from "react-router-dom";
import BoarderListPage from "./pages/BoarderListPage/BoarderListPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ParticipantsPage from "./pages/ParticipantsPage/ParticipantsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BoarderListPage />} />
        <Route path="/register/:eventId" element={<RegisterPage />} />
        <Route path="/events/:eventId/users" element={<ParticipantsPage />} />
        <Route path="*" element={<BoarderListPage />} />
      </Routes>
    </div>
  );
}

export default App;
