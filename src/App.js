import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EntryName from "./Components/EntryName/EntryName";
import { data } from "./data";
import MCQ from "./Components/Mcq/Mcq";
import ResultPage from "./Components/Result/result";

import "./App.css";

function App() {
  const resultInialize = Array(data.length).fill(null);
  const [person, setPerson] = useState("");
  const [result, setResult] = useState(resultInialize);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<EntryName person={person} setPerson={setPerson} />}
          />
          <Route
            path="/mcq"
            element={<MCQ result={result} setResult={setResult} />}
          />
          <Route path="/result" element={<ResultPage result={result} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
