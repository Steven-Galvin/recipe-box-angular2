import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Recipie box</h1>
  <h3>{{test}}</h3>
  <h4>{{testObj.title}}</h4>
  `
})

export class AppComponent {
  test: string = 'test';
  testObj = new Recipie("German Chocolate cake");
}

export class Recipie {
  ingredients: string[] = ["testEl", "testEl2"];
  constructor(public title: string) { }
  save_ing(ing: string) {
    this.ingredients.push(ing);
  }
  test() {
    return "just a test";
  }
}


//
// @Component({
//   selector: 'app-root',
//   template: `
//   <div class="container">
//     <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
//     <h3>{{currentFocus}}</h3>
//     <ul>
//       <li *ngFor="let currentTask of tasks">{{currentTask.description}}</li>
//     </ul>
//   </div>
//   `
// })
//
//
// export class AppComponent {
//   currentFocus: string = 'Angular Homework';
//   currentTime = new Date();
//   month: number = this.currentTime.getMonth() + 1;
//   day: number = this.currentTime.getDate();
//   year: number = this.currentTime.getFullYear();
//   tasks: Task[] = [
//     new Task('Finish weekend Angular homework for Epicodus course'),
//     new Task('Begin brainstorming possible JavaScript group projects'),
//     new Task('Add README file to last few Angular repos on GitHub')
//   ];
// }
//
// export class Task {
//   public done: boolean = false;
//   constructor(public description: string) { }
// }
