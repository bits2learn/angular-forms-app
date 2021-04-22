import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recepie } from '../recepie';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recepie>();

  recepies: Recepie[] = [
    new Recepie('Samosa','Vegetable Samosa made with maida, potatoes and spices',
    'https://static.toiimg.com/thumb/70551342.cms?width=571&height=382&imgsize=60677'),
    new Recepie('Chicken Tikka Masala', 'Chicken Tikka Masala', 
    'https://chefbega.com/wp-content/uploads/2019/12/Best-Chicken-Tikka-Masala-IMAGE-1.jpg'),
    new Recepie('Pasta', 'Pasta with Broccoli', 
    'https://cdn.mos.cms.futurecdn.net/sk3SDCHJihxsKfsxJHLuf3-768-80.jpg'),
    new Recepie('Quesadilla', 'Cheese quesadilla', 
    'https://www.simplyrecipes.com/thmb/O-rhPnz2V3hdqKFPij8NlwZIKqs=/2376x1584/filters:fill(auto,1)/Simply-Recipes-Quesadilla-LEAD-5-55da42a2a306497c85b1328385e44d85.jpg'),
    new Recepie('Chicken Tandoori', 'Tandoori chicken',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-tandori-1526595014.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recepie){
    this.recipeWasSelected.emit(recipe);
  }

}
