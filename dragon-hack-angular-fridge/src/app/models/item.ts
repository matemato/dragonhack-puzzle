export class Item {
  experationDate: Date;
  name: string;
  id: number | null;

  constructor(experationDate: Date, name: string, id: number | null) {
    this.experationDate = experationDate;
    this.name = name;
    this.id = id;
  }
}
