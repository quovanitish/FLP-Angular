export class Todo {
  title: string;
  body: string;
  status: string;
  createdOn: string;
  uid: string;
  owner: string;

  constructor(
    title: string,
    body: string,
    status: string,
    createdOn: string,
    uid: string,
    owner: string
  ) {
    this.title = title;
    this.body = body;
    this.status = status;
    this.createdOn = createdOn;
    this.uid = uid;
    this.owner = owner;
  }
}
