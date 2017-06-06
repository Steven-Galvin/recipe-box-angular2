import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Recipie box</h1>
   <ul>
     <li *ngFor="let cake of cakes">
        <p> Title: {{cake.title}} </p>
        <p> Ingredients: </p>
        <p *ngFor="let ingredient of cake.ingredients"> {{ingredient}}</p>
     </li>
   </ul>
  `
})

export class AppComponent {
  test: string = 'test';
  cakes: Recipie[] = [ new Recipie("German Chocolate cake",[ "chocolate", "flour"]),
          new Recipie("Lemon",[ "lemon juice", "flour"])
        ]
}

export class Recipie {
  constructor(public title: string, public ingredients: string[]) {
  }
}
