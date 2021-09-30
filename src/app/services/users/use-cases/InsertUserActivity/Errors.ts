export namespace InsertUserActivityErrors {
    export class UserActivityNotFound extends Error {
      constructor(title: string) {
        super(`User activity was not found`);
      }
    }
  }
  