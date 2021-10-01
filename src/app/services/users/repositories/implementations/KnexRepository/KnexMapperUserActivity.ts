import { UserActivity } from "../../../entities/UserActivity";

export interface KnexUserActivityProps {
  id: string;
  datetime: Date;
  endpoint: string;
  request: string;
}

export class KnexMapperUserActivity {
  static toPersistence(userActivity: UserActivity):KnexUserActivityProps {
      return {
          id: userActivity.id.value,
          datetime: userActivity.dateTime,
          endpoint: userActivity.endpoint,
          request: JSON.stringify(userActivity.request)
      }
  }
}
