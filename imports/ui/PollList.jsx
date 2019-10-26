import React from "react";

const PollList = ({ polls }) => {
  return <div>{JSON.stringify(polls, null, 4)}</div>;
};

export default PollList;
