import React, { useState } from "react";
import { data } from "../../data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MCQ = () => {
  const [index, setIndex] = useState(0);
  const { id, question, answer } = data[index];

  const leftShift = () => {
    if (index) setIndex(index - 1);
    else setIndex(data.length - 1);
  };

  const rightShift = () => {
    if (index + 1 !== data.length) setIndex(index + 1);
    else setIndex(0);
  };

  return (
    <div className="main-container">
      <div className="display-container p-6">
        <div className="">
          <p className="text-2xl mb-4">
            {id + 1} {question}
          </p>
          <div className="flex flex-col items-start gap-4">
            {answer.map((ans, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center gap-2 items-center text-2xl"
                >
                  <input type="checkbox"/>
                  <label>{ans}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="button-container">
          <button className="prev-btn" onClick={leftShift}>
            <div className="flex items-center  text-blue-400 text-xl">
              <FaChevronLeft />
              <p>Prev</p>
            </div>
          </button>
          <button className="next-btn" onClick={rightShift}>
            <div className="flex items-center text-blue-400 text-xl">
              <p>Next</p>
              <FaChevronRight />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MCQ;
