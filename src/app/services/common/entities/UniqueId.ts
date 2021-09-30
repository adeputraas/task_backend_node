import { z } from "zod";
import { v4 } from "uuid";

export const UNIQUE_ID_SCHEMA = z.string().uuid();

export type UniqueIdProps = z.infer<typeof UNIQUE_ID_SCHEMA>;

export class UniqueId {
  private _id: string;
  public constructor(id?: UniqueIdProps) {
    this._id = id ? UNIQUE_ID_SCHEMA.parse(id) : v4();
  }

  get value() {
    return this._id;
  }
}
