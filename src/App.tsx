import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import Experiment from "./pages/experiment";
import Form from "./pages/form";
import Finish from "./pages/finish";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/experiment" element={<Experiment />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
