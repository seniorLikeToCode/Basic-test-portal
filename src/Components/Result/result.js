import React from "react";
import { data } from "../../data";

const ResultPage = (result) => {
  let temp = result.result
  let right = 0;
  let att = 0;

  for (let i = 0; i < data.length; i++) {
    if (temp[i] === null) continue;
    if (temp[i]) att++;
    if (data[i].correct === temp[i]) right++;
  }

  return (
    <>
      <div className="h-screen bg-red-500 flex flex-col justify-center items-center">
        <h1 className="font-semibold text-4xl mb-4 text-neutral-900">Score</h1>
        <div className="w-auto h-auto bg-red-200 py-4 px-8 text-xl mb-10">
          <div className="flex justify-between ">
            <h2 className="font-medium">Marks:</h2>
            <p>
              {right}/{data.length}
            </p>
          </div>
          <div className="flex justify-between">
            <h2 className="font-medium">Attempted:</h2>
            <p>
              {att}/{data.length}
            </p>
          </div>
          <div className="flex justify-between gap-4">
            <h2 className="font-medium">Not Attempted:</h2>
            <p>
              {data.length - att}/{data.length}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultPage;
