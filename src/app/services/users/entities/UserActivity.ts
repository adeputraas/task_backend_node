import { z } from "zod";
import { UniqueId } from "../../common/entities/UniqueId";
import { Entity } from "../../common/entities/Entity";

export const USER_ACTIVITY_SCHEMA = z.object({
  endpoint: z.string(),
  request: z.object({
    title: z.string(),
  }),
  dateTime: z.date(),
});

export type UserActivityProps = z.infer<typeof USER_ACTIVITY_SCHEMA>;

export class UserActivity extends Entity<UserActivityProps> {
  get id() {
    return this._id!;
  }

  get endpoint() {
    return this.props.endpoint;
  }

  get request() {
    return this.props.request;
  }

  get dateTime() {
    return this.props.dateTime;
  }

  static create(props: UserActivityProps, id?: UniqueId) {
    const userActivity = USER_ACTIVITY_SCHEMA.parse(props);
    return new UserActivity(userActivity, id);
  }
}
