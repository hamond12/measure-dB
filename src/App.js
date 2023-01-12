import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Soundpage from "./pages/Soundpage";
import Checkpage from "./pages/Checkpage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />}></Route>
      </Routes>
      <Routes>
        <Route path="/sound-measure" element={<Soundpage />}></Route>
      </Routes>
      <Routes>
        <Route path="/dB-check" element={<Checkpage />}></Route>
      </Routes>
    </Router>
  );
}
