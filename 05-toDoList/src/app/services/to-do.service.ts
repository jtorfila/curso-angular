import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  lists: List[] = [];

  constructor() {

    this.loadStorage();
    
    //const list1 = new List('Lista 1');
    //const list2 = new List('Lista 2');

    //this.lists.push(list1, list2);

  }

  createList ( titulo: string ) {

    const newList = new List(titulo);
    this.lists.push(newList);
    this.saveStorage();

    return newList.id;

  }

  deleteList( list: List ) {

    this.lists = this.lists.filter( listData => listData.id !== list.id );

    this.saveStorage();

  }

  getList( id: string | number ) {

    id = Number(id);

    return this.lists.find( listData => listData.id === id );

  }

  saveStorage() {

    localStorage.setItem('data', JSON.stringify(this.lists));

  }

  loadStorage() {

    if( localStorage.getItem('data') ) {
      this.lists = JSON.parse( localStorage.getItem('data') );
    } else {
      this.lists = [];
    }

  }

}
