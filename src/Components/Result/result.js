import React from "react";
import { data } from "../../data";

const ResultPage = (result) => {
  console.log(result);
  let temp = [];
  for (let i = 0; i < data.length; i++) temp.push(data[i].correct);
  console.log(temp);
  let right = 0,    
    att = 0;

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
