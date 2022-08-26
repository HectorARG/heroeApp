import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  }

  constructor( private heroeService: HeroesService,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params
                       .pipe(switchMap(({ id }) => this.heroeService.getHeroePorId(id)))
                       .subscribe(heroe => this.heroe = heroe);
  }

  guardar(){
    if( this.heroe.superhero.trim().length === 0 ){
      return;
    }


    this.heroeService.agregarHeroe(this.heroe).subscribe(rersp =>{
      console.log(rersp);
    }, err => {
      console.log(err);
    })
  }

}
