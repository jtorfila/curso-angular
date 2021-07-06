import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import { List } from '../../models/list.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @ViewChild( IonList ) list: IonList;
  @Input() finished = true;

  constructor( 
    public toDoService: ToDoService,
    private router: Router,
    private alertCtrl: AlertController ) { }

  ngOnInit() {}

  selectedList( list: List ) {

    if ( this.finished ) {
      this.router.navigateByUrl(`tabs/tab2/add/${ list.id }`);
    } else {
      this.router.navigateByUrl(`tabs/tab1/add/${ list.id }`);
    }

  }

  deleteList( list: List ) {

    this.toDoService.deleteList( list );

  }

  async editList( list: List ) {

    const alert = await this.alertCtrl.create({
      header: 'Editar lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: list.title,
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.list.closeSlidingItems();
          }
        },
        {
          text: 'Actualizar',
          handler: (data) => {
            if( data.titulo.lenght === 0 ) {
              return;
            }
            list.title = data.titulo;
            this.toDoService.saveStorage();
            this.list.closeSlidingItems();
          }
        }
      ]
    });

    alert.present();

  }

}
