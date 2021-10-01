import mongoose from "mongoose";
import { UserActivity } from "../../../entities/UserActivity";
import { IUserActivityRepository } from "../../IUserActivityRepository";
import { UserActivityMongooseModel } from "./models/UserActivityModelMongoose";
import { MongooseUserActivityMapper } from "./MongooseUserActivityMapper";

export class MongooseUserActivityRepository implements IUserActivityRepository {
  constructor(private client: mongoose.Model<UserActivityMongooseModel>) {}

  async create(userActivity: UserActivity): Promise<void> {
    const userActivityPersistence = MongooseUserActivityMapper.toPersistence(userActivity);
    await this.client.create(userActivityPersistence);
  }
}
