import React from "react";
import Form from "./Form";
import { withTracker } from "meteor/react-meteor-data";
import Polls from "./../api/poll";
import PollList from "./PollList";
import { Meteor } from "meteor/meteor";

class App extends React.Component {
  state = {};
  handleCreatePoll = poll => {
    console.log("poll", poll);
    this.props.insertPoll(poll);
  };
  render() {
    return (
      <div>
        <h1>AC Voting</h1>
        <Form onCreatePoll={this.handleCreatePoll} />
        <PollList polls={this.props.polls} />
      </div>
    );
  }
}

export default AppContainer = withTracker(() => {
  return {
    polls: Polls.find().fetch(),
    insertPoll: poll => Meteor.call("polls.insert", poll)
  };
})(App);
