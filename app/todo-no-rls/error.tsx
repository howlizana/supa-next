"use client";
import React from "react";
import { BounceLoader } from "react-spinners";

const Error = () => {
  return (
    <div className="flex flex-col items-center mt-12">
      <div>
        <BounceLoader />
      </div>
      <p className="font-bold my-2">There is something wrong...</p>
    </div>
  );
};

export default Error;
