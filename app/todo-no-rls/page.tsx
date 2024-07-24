import React from "react";
import { sleep } from "@/lib/utils";
import TodoContainer from "./components/TodoContainer";

const page = async () => {
  // throw new Error("custom");
  // console.log(">>API call start");
  // await sleep(1500);
  // console.log(">>API call end");
  return (
    <div>
      <TodoContainer />
    </div>
  );
};

export default page;
