import React from "react";
import { Link } from "react-router-dom";

const EntryName = () => {
  return (
    <div className="name-container">
      <input placeholder="Name" className="nameinput" />
      <Link to="/mcq" className="btn text-center">
        Submit
      </Link>
    </div>
  );
};

export default EntryName;
