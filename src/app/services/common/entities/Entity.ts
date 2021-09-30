import { UniqueId } from "./UniqueId";

export abstract class Entity<T> {
  protected readonly props: T;
  protected readonly _id: UniqueId;
  protected constructor(props: T, _id?: UniqueId) {
    this.props = props;
    this._id = _id || new UniqueId();
  }
  
}
