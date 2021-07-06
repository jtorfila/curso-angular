import { ItemList } from './item-list.model';


export class List {

    id: number;
    title: string;
    createAt: Date;
    finishedAt: Date;
    finished: boolean;
    items: ItemList[];

    constructor( title: string ) {
        this.title = title;
        this.createAt = new Date();
        this.finished = false;
        this.items = [];
        this.id = new Date().getTime();
    }

}
