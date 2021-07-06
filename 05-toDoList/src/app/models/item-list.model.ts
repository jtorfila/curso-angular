export class ItemList {
  description: string;
  complete: boolean;

  constructor(description: string) {
    this.description = description;
    this.complete = false;
  }
}
