import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import Experiment from "./pages/experiment";
import Form from "./pages/form";
import Finish from "./pages/finish";
import Instructions from "./pages/instructions";
import Test from "./pages/test";
import Wait from "./pages/wait";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route
          path="wait-test"
          element={<Wait nextPage="/test" text="A rodada teste iniciará em" />}
        />
        <Route path="/test" element={<Test />} />
        <Route
          path="wait-experiment"
          element={
            <Wait nextPage="/experiment" text="A pesquisa iniciará em" />
          }
        />
        <Route path="/experiment" element={<Experiment />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
