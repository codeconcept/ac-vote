import React from "react";

class Poll extends React.Component {
  state = {};
  render() {
    const { question, answer1, answer2, answer3, _id } = this.props.data;
    const radioId1 = `${_id}-rb1`;
    const radioId2 = `${_id}-rb2`;
    const radioId3 = `${_id}-rb3`;
    return (
      <div>
        <div>{question}</div>
        <input
          type="radio"
          id={radioId1}
          name={_id}
          key={answer1.text}
          value={answer1.text}
        />
        <label htmlFor={radioId1}>{answer1.text}</label>
        <input
          type="radio"
          id={radioId2}
          name={_id}
          key={answer2.text}
          value={answer2.text}
        />
        <label htmlFor={radioId2}>{answer2.text}</label>
        <input
          type="radio"
          id={radioId3}
          name={_id}
          key={answer3.text}
          value={answer3.text}
        />
        <label htmlFor={radioId3}>{answer3.text}</label>
      </div>
    );
  }
}

export default Poll;
