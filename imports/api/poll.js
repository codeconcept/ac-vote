import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

export default Polls = new Mongo.Collection("polls");

Meteor.methods({
  "polls.insert"(poll) {
    check(poll, Object);
    Polls.insert(poll);
  },
  "polls.vote"(poll, answer) {
    check(poll, Object);
    check(answer, String);
    Polls.update({ _id: poll._id }, { $inc: { [`${answer}.votes`]: 1 } });
  }
});
