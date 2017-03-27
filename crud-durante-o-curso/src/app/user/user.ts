export class User {

  static fromJSONList(jsonList: Array<User>){
    if(!jsonList){
      return null;
    }
    return jsonList.map((json) => this.fromJSON(json));
  }

  static fromJSON(json: User){
    if(!json) return null;
    let object = new this(
      json.id,
      json.name,
    );
    return object;
  }

  constructor(
    public id?: number,
    public name?: string,
  ) {

  }

  get idAndName() {
    return `${this.id} - ${this.name}`;
  }

}
