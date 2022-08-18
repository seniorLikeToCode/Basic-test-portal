import React from "react";
import { Link } from "react-router-dom";

const EntryName = ({ person, setPerson }) => {
  const handlerChange = (e) => {
    setPerson(e.target.value);
  };

  return (
    <div className="name-container">
      <input
        placeholder="Name"
        className="nameinput"
        value={person}
        onChange={handlerChange}
      />
      <Link to="/mcq" className="btn text-center">
        Submit
      </Link>
    </div>
  );
};

export default EntryName;
