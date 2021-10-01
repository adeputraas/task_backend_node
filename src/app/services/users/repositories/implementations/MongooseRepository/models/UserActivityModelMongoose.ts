import mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface UserActivityMongooseModel {
  _id: string;
  datetime: Date;
  endpoint: string;
  request: string;
}

const UserActivitySchema = new Schema({
  _id: String,
  datetime: Date,
  endpoint: String,
  request: String,
});

export const userActivityMongooseModel = mongoose.model<UserActivityMongooseModel>("userActivity", UserActivitySchema);