import { Heroe } from './../../interfaces/heroes.interfaces';
import { Component, OnInit } from '@angular/core';
import { HeroersService } from '../../services/heroers.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  heroes!: Heroe[];

  constructor( private heroersService: HeroersService ) { }

  ngOnInit(): void {
    this.heroersService.getHeroes().subscribe(resp => {
      this.heroes = resp;
    })
  }

}
