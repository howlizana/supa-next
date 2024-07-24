"use client";
import React from "react";
import { DotLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-col items-center mt-12">
      <div>
        <DotLoader />
      </div>
      <p className="font-bold my-2">Loading...</p>
    </div>
  );
};

export default Loading;
