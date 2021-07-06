import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroeService, HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe: any = {};

  mostrarCasa = true;

  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService){ 
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe( params['id'] );
    })
  }

}
