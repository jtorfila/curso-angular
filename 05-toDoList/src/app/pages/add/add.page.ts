import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import { ActivatedRoute } from '@angular/router';
import { List } from '../../models/list.model';
import { ItemList } from '../../models/item-list.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: List;
  itemName = '';

  constructor( 
    private toDoService: ToDoService,
    private route: ActivatedRoute ) { 

      const listId = this.route.snapshot.paramMap.get('listId');
      this.list = this.toDoService.getList( listId );

  }

  ngOnInit() {
  }

  addItem() {

    if( this.itemName.length === 0 ) {
      return;
    }

    const newItem = new ItemList( this.itemName );
    this.list.items.push( newItem );

    this.itemName = '';
    this.toDoService.saveStorage();
  }

  changeCheck( item: ItemList ) {

    const toDo = this.list.items.filter( itemData => !itemData.complete ).length;
    if( toDo === 0 ) {
      this.list.finishedAt = new Date();
      this.list.finished = true;
    } else {
      this.list.finishedAt = null;
      this.list.finished = false;
    }

    this.toDoService.saveStorage();

    console.log(this.toDoService.lists);

  }

  delete( i: number ) {

    this.list.items.splice( i, 1 );
  
    this.toDoService.saveStorage();

  }

}
