import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Createform from "./components/Home/Createform";
import RenderPart from "./components/Home/RenderPart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Createform />} />
        <Route path="/renderpart" element={<RenderPart />} />
      </Routes>
    </Router>
  );
}

export default App;
