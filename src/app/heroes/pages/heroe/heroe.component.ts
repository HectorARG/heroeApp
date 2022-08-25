import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap, tap } from 'rxjs/operators';
import { Heroe } from '../../interfaces/heroes.interfaces';
import { HeroersService } from '../../services/heroers.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(private activatedRoute: ActivatedRoute, private heroersService: HeroersService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(switchMap(({id}) =>  this.heroersService.viewHeroes(id)), tap(console.log) ).subscribe(hero => this.heroe = hero);
  }

}
