import { UserActivity } from "../entities/UserActivity";

export interface IUserActivityRepository {
    create(userActivity: UserActivity): Promise<void>;
}