import React from "react";
import Poll from "./Poll";

const PollList = ({ polls, onVote }) => {
  return (
    <div>
      {polls.map(p => (
        <Poll key={p._id} data={p} id={p._id} onVote={onVote} />
      ))}
    </div>
  );
};

export default PollList;
