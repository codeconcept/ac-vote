import React from "react";
import Poll from "./Poll";

const PollList = ({ polls }) => {
  return (
    <div>
      {polls.map(p => (
        <Poll key={p._id} data={p} id={p._id} />
      ))}
    </div>
  );
};

export default PollList;
