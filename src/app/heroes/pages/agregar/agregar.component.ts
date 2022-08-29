import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img{
      width: 50%;
      border-radius: 5px;
    }
    `
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
               private activatedRoute: ActivatedRoute,
               private router: Router ) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar')){
      return;
    }
    this.activatedRoute.params
                       .pipe(switchMap(({ id }) => this.heroeService.getHeroePorId(id)))
                       .subscribe(heroe => this.heroe = heroe);
  }

  guardar(){
    if( this.heroe.superhero.trim().length === 0 ){
      return;
    }

    if(this.heroe.id){
      this.heroeService.editarHeroe(this.heroe).subscribe()
    }else{
      this.heroeService.agregarHeroe(this.heroe).subscribe(rersp =>{
        console.log(rersp);
      }, err => {
        console.log(err);
      });
    }

  }

  eliminar(heroe: Heroe): void{
    this.heroeService.eliminarHeroe(heroe.id!).subscribe(success => {
      this.router.navigate(['/heroes/listado'])
    })
  }
}
