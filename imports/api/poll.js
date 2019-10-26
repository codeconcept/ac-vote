import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

export default Polls = new Mongo.Collection("polls");

Meteor.methods({
  "polls.insert"(poll) {
    check(poll, Object);
    Polls.insert(poll);
  }
});
