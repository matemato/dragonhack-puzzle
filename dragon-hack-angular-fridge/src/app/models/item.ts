export class Item {
  EXPERATIONDATE: Date;
  NAME: string;
  ITEM_ID: number | null;

  constructor(experationDate: Date, name: string, id: number | null) {
    this.EXPERATIONDATE = experationDate;
    this.NAME = name;
    this.ITEM_ID = id;
  }
}
