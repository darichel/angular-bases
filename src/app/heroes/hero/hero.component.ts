import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number  = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase()
  }

  getHeroDescriptio(): string {
    return `${ this.name } - ${ this.age }`
  }

  changeHero(): void {
    this.name = 'Spiderman'
  }

  changeEdad() {
    this.age = 25
  }

  reset() {
    this.name = 'Ironman';
    this.age = 45;
  }
}
