export class UnexpectedDataError extends Error {
  private _data: unknown;
  constructor(data: unknown, message: string) {
    super(message);
    this._data = data;
  }

  get data() {
    return this._data;
  }
}
