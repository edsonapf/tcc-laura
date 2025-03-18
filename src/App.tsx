import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import Experiment from "./pages/experiment";
import Form from "./pages/form";
import Finish from "./pages/finish";
import Instructions from "./pages/instructions";
import Test from "./pages/test";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";

if (!import.meta.env.DEV) {
  setupLogRocketReact(LogRocket);
  LogRocket.init("fsxvd1/tcc-laura");
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/test" element={<Test />} />
        <Route path="/experiment" element={<Experiment />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
