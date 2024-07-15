import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public heroDeleted?: string

  removeLastHero(): void {
    const heroDeleted = this.heroNames.pop()
    this.heroDeleted = heroDeleted?.toString()
  }
}
