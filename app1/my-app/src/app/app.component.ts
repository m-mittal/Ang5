import { Component } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import { OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements  OnInit {
  title = 'Hello there !! app works !!!';
  heroes: Hero[];

  constructor(private heroService : HeroService) {}
  getHeroes(): void {
    this.heroService.getHeroes();
    // .then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
