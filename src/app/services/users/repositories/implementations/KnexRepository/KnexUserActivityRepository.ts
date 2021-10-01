import { Knex, knex } from "knex";
import { UserActivity } from "../../../entities/UserActivity";
import { KnexMapperUserActivity } from "./KnexMapperUserActivity";
import { IUserActivityRepository } from "../../IUserActivityRepository";

export class KnexUserActivityRepository implements IUserActivityRepository {
  constructor(private client: Knex) {}
  private baseQuery() {
    return this.client("activity");
  }
  async create(userActivity: UserActivity) {
    const userActivityPersistence = KnexMapperUserActivity.toPersistence(userActivity);
    await this.baseQuery().insert(userActivityPersistence);
  }
}
