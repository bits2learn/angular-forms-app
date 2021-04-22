import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recepie } from './recepie';

@Injectable({
  providedIn: 'root'
})
export class RecepieService {

  constructor(private sl: ShoppingListService) { }

  recepieSelected = new EventEmitter<Recepie>();

  private recepies: Recepie[] = [
    new Recepie('Samosa','Vegetable Samosa',
    'https://static.toiimg.com/thumb/70551342.cms?width=571&height=382&imgsize=60677', 
    [
      new Ingredient('All Purpose Flour', 2),
      new Ingredient('Potatoes', 2),
      new Ingredient('Peas', 10),
    ]),
    new Recepie('Chicken Tikka Masala', 'Chicken Tikka Masala', 
    'https://chefbega.com/wp-content/uploads/2019/12/Best-Chicken-Tikka-Masala-IMAGE-1.jpg', 
    [
      new Ingredient('Chicken', 3),
      new Ingredient('Yogurt', 4),
      new Ingredient('Onions', 1),
    ]),
    new Recepie('Pasta', 'Pasta with Broccoli', 
    'https://cdn.mos.cms.futurecdn.net/sk3SDCHJihxsKfsxJHLuf3-768-80.jpg', 
    [
      new Ingredient('Pasta', 2),
      new Ingredient('Broccoli', 1)
    ]),
    new Recepie('Quesadilla', 'Cheese quesadilla', 
    'https://www.simplyrecipes.com/thmb/O-rhPnz2V3hdqKFPij8NlwZIKqs=/2376x1584/filters:fill(auto,1)/Simply-Recipes-Quesadilla-LEAD-5-55da42a2a306497c85b1328385e44d85.jpg', 
    [
      new Ingredient('Tortilla', 1),
      new Ingredient('Cheese', 2),
      new Ingredient('Onions', 1),
    ]),
    new Recepie('Chicken Tandoori', 'Tandoori chicken',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-tandori-1526595014.jpg', 
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Onion', 2),
        new Ingredient('Masala', 1),
      ])
  ];

  getRecipes(){
    return this.recepies.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.sl.addIngredients(ingredients);
  }
}
