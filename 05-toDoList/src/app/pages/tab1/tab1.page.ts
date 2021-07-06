import { Component } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( 
    public toDoService: ToDoService, 
    private router: Router,
    private alertCtrl: AlertController ) {

  }

  async addList() {

    const alert = await this.alertCtrl.create({
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            console.log(data);
            if( data.titulo.lenght === 0 ) {
              return;
            }
            // Tengo que crear la lista
            const listId = this.toDoService.createList(data.titulo);
            this.router.navigateByUrl(`tabs/tab1/add/${ listId }`);
          }
        }
      ]
    });

    alert.present();
  
  }

}
