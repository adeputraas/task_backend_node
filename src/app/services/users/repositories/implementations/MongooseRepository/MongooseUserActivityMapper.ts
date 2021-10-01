import { UserActivity } from "../../../entities/UserActivity";
import { UserActivityMongooseModel } from "./models/UserActivityModelMongoose";


export class MongooseUserActivityMapper {
  static toPersistence(userActivity: UserActivity):UserActivityMongooseModel {
      return {
          _id: userActivity.id.value,
          datetime: userActivity.dateTime,
          endpoint: userActivity.endpoint,
          request: JSON.stringify(userActivity.request)
      }
  }
}
