import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RatingView from "./componente/MainRating";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RatingView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
