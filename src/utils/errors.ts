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
export class PokemonFetchError extends Error {
  private _status: number;
  private _url: string;

  constructor(url: string, response: Response) {
    super(response.statusText);
    this._status = response.status;
    this._url = url;
  }

  get formattedErrorMessage() {
    return `The pokedex server was unable to return the data from ${this._url}. The server responded with "${this.message} (${this._status})"`;
  }
}
