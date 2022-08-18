import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import EntryName from "./Components/EntryName/EntryName";
import MCQ from "./Components/Mcq/Mcq";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EntryName />} />
          <Route path="/mcq" element={<MCQ />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
