import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EntryName from "./Components/EntryName/EntryName";
import MCQ from "./Components/Mcq/Mcq";

import "./App.css";

function App() {
  const [person, setPerson] = useState("");
  const [result, setResult] = useState([]);

  if (person) console.log(person);
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
