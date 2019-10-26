import React from "react";

class Form extends React.Component {
  state = {
    question: "",
    answer1: { text: "", votes: 0 },
    answer2: { text: "", votes: 0 },
    answer3: { text: "", votes: 0 }
  };
  handleChange = (evt, id) => {
    if (id === "question") {
      this.setState({
        question: evt.target.value
      });
    } else {
      this.setState({
        [id]: { ...this.state[id], text: evt.target.value }
      });
    }
  };
  handleSubmit = evt => {
    evt.preventDefault();
    const { question, answer1, answer2, answer3 } = this.state;
    this.props.onCreatePoll({
      createdAt: new Date(),
      question,
      answer1,
      answer2,
      answer3
    });
  };
  render() {
    return (
      <div>
        <h3>Créer un nouveau sondage</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="question"
            placeholder="question"
            value={this.state.question}
            onChange={evt => this.handleChange(evt, "question")}
          />
          <br />
          <input
            type="text"
            name="option1"
            placeholder="option 1"
            onChange={evt => this.handleChange(evt, "answer1")}
            onBlur={evt => this.handleChange(evt, "answer1")}
          />
          <br />
          <input
            type="text"
            name="option2"
            placeholder="option 2"
            onChange={evt => this.handleChange(evt, "answer2")}
            onBlur={evt => this.handleChange(evt, "answer2")}
          />
          <br />
          <input
            type="text"
            name="option3"
            placeholder="option 3"
            onChange={evt => this.handleChange(evt, "answer3")}
            onBlur={evt => this.handleChange(evt, "answer3")}
          />
          <br />
          <button type="submit">créer</button>
        </form>
      </div>
    );
  }
}

export default Form;
